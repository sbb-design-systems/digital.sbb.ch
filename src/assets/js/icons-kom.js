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
});

categories.addEventListener('change', applyFilters);


const searchinput = document.getElementById("search-input");
const resetbutton = document.getElementById("search-reset");
resetbutton.addEventListener('click', function() {
  if (searchinput) {
    searchinput.value = '';
    searchinput.focus();
    resetbutton.style.display = "none";
  }
  iconlist.search();
});
searchinput.addEventListener("keyup", (event) => {
  if (searchinput.value.length) {
    resetbutton.style.display = "block";
  } else {
    resetbutton.style.display = "none";
  }
});

function updateNotFound() {
  const count = iconlist.matchingItems.filter(function(item) { return !isTitle(item); }).length;
  notFound.style.display = count ? "none" : "block";
}
iconlist.on('searchComplete', updateNotFound);
iconlist.on('filterComplete', updateNotFound);

applyFilters();
