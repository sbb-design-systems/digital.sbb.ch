var options = {
  valueNames: [
  'only-for-search',
    {
        data: ['id']
    },
    {
        data: ['size']
    },
    {
        data: ['category']
    },
    {
        data: ['name']
    }
  ]
};
var iconlist = new List('icons', options);


const categories = document.getElementById("categories");
const sizes = document.getElementById("sizes");
const notFound = document.getElementsByClassName('not-found')[0];
const searchinput = document.getElementById("search-input");
const resetbutton = document.getElementById("search-reset");
const availableSizes = new Set(["extra-small", "small", "medium", "large"]);
const availableCategories = new Set(
  Array.from(categories.querySelectorAll("sbb-option"), option => option.getAttribute("value"))
);

// Kategorie-Titel haben data-size="title", Icons eine Liste ihrer Grössen ("small medium large")
function isTitle(item) {
  return item.values().size === "title";
}

function hasSize(item, size) {
  return item.values().size.split(" ").indexOf(size) >= 0;
}

function selectedSize() {
  return sizes.value || "small";
}

function selectedCategory() {
  return categories.value || "all";
}

function syncUrl(pushState = false) {
  const url = new URL(window.location.href);
  const search = searchinput.value;
  const size = selectedSize();
  const category = selectedCategory();

  if (search) url.searchParams.set("q", search);
  else url.searchParams.delete("q");

  if (size !== "small") url.searchParams.set("size", size);
  else url.searchParams.delete("size");

  if (category !== "all") url.searchParams.set("category", category);
  else url.searchParams.delete("category");

  window.history[pushState ? "pushState" : "replaceState"](window.history.state, "", url);
}

function restoreFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const requestedSize = params.get("size");
  const requestedCategory = params.get("category");

  sizes.value = availableSizes.has(requestedSize) ? requestedSize : "small";
  categories.value = availableCategories.has(requestedCategory) ? requestedCategory : "all";
  searchinput.value = params.get("q") || "";
  resetbutton.style.display = searchinput.value ? "block" : "none";

  updateImages();
  iconlist.search(searchinput.value);
  applyFilters();
  syncUrl();
}

// Icons dürfen nur in diesen 4 Grössen abgebildet werden
const sizePx = { "extra-small": 16, "small": 24, "medium": 36, "large": 48 };

// Eine Kachel pro Icon: beim Grössenwechsel werden nur Bildquelle und Masse ausgetauscht
function updateImages() {
  const size = selectedSize();
  iconlist.items.forEach(function(item) {
    if (isTitle(item) || !hasSize(item, size)) return;
    const img = item.elm.querySelector("img");
    img.src = "https://icons.app.sbb.ch/icons/" + item.elm.dataset.group + "-" + size + ".svg";
    img.width = img.height = sizePx[size];
  });
}

function applyFilters() {
  const size = selectedSize();
  const category = selectedCategory();

  // Titel nur zeigen, wenn die Kategorie Icons in der gewählten Grösse enthält
  const categoriesWithIcons = new Set();
  iconlist.items.forEach(function(item) {
    if (!isTitle(item) && hasSize(item, size)) categoriesWithIcons.add(item.values().category);
  });

  iconlist.filter(function(item) {
    if (category !== "all" && item.values().category !== category) return false;
    if (isTitle(item)) return categoriesWithIcons.has(item.values().category);
    return hasSize(item, size);
  });
}

sizes.addEventListener('change', function() {
  updateImages();
  applyFilters();
  syncUrl(true);
});

categories.addEventListener('change', function() {
  applyFilters();
  syncUrl(true);
});

resetbutton.addEventListener('click', function() {
  if (searchinput) {
    searchinput.value = '';
    searchinput.focus();
    resetbutton.style.display = "none";
  }
  iconlist.search();
  syncUrl();
});
searchinput.addEventListener("input", () => {
  if (searchinput.value.length) {
    resetbutton.style.display = "block";
  } else {
    resetbutton.style.display = "none";
  }
  syncUrl();
});

function updateNotFound() {
  const count = iconlist.matchingItems.filter(function(item) { return !isTitle(item); }).length;
  notFound.style.display = count ? "none" : "block";
}
iconlist.on('searchComplete', updateNotFound);
iconlist.on('filterComplete', updateNotFound);

window.addEventListener("popstate", restoreFromUrl);
Promise.all([
  customElements.whenDefined("sbb-select"),
  customElements.whenDefined("sbb-radio-button-group")
]).then(restoreFromUrl);
