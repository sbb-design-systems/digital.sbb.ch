const patterncategories = document.getElementById("categories");
const buttons = document.querySelectorAll(".more-details");
const searchinput = document.getElementById("search-input");
const resetbutton = document.getElementById("search-reset");

var options = {
    valueNames: [
    'search-title',
    'subtitle',
      {
          data: ['keywords']
      },
      {
        data: ['categories']
      }
    ]
  };
  var componentlist = new List('componentbrowser', options);
  



patterncategories.addEventListener('change', function() {
    let selectedFilter = patterncategories.value;
    componentlist.filter(function(item) {
      const categories = item.values().categories;      
      if (selectedFilter.includes("all")) {
        return true;
      } else {
        const categoryArr = (categories || "").split(',').map(c => c.trim());
        return categoryArr.some(cat => selectedFilter.includes(cat));
      }
    }
    );
});

const uncheckAllTag = () => {
  document.getElementById('all').checked = false;
  //alert("done");
};

const uncheckTags = () => {
  Array.from(document.querySelectorAll('sbb-tag'))
    .filter((e) => e.getAttribute('id') !== 'all' && !e.getAttribute('disabled'))
    .forEach((e) => e.checked = false);
};
  

resetbutton.addEventListener('click', function() {
  if (searchinput) {
    searchinput.value = '';
    searchinput.focus();
    resetbutton.style.display = "none";
  }
  componentlist.search();
});


searchinput.addEventListener("keyup", (event) => {
  if (searchinput.value.length) {
    resetbutton.style.display = "block";
  } else {
    resetbutton.style.display = "none";
  }
});

componentlist.on('searchComplete', function (e) {
  if (e.matchingItems.length == 0) {
    document.getElementsByClassName('not-found')[0].style.display = "block";
  } else {
    document.getElementsByClassName('not-found')[0].style.display = "none";
  }
});
componentlist.on('filterComplete', function (e) {
  if (e.matchingItems.length == 0) {
    document.getElementsByClassName('not-found')[0].style.display = "block";
  } else {
    document.getElementsByClassName('not-found')[0].style.display = "none";
  }
});

  


