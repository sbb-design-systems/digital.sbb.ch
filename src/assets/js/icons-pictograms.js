var options = {
    valueNames: [
    'iconname',
    'only-for-search',
      {
          data: ['id']
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

  categories.addEventListener('change', function() {
    let selectedFilter = categories.value;
  
    iconlist.filter(function(item) {
        if (selectedFilter == "all") {
            return true;
        }
        if (item.values().category === selectedFilter) {
            return item;
        }
    }
    );
  
  });
  
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
  iconlist.on('searchComplete', function (e) {
    if (e.matchingItems.length == 0) {
      document.getElementsByClassName('not-found')[0].style.display = "block";
    } else {
      document.getElementsByClassName('not-found')[0].style.display = "none";
    }
  });
  iconlist.on('filterComplete', function (e) {
    if (searchinput.value.length) {
      if (e.matchingItems.length == 0) {
        document.getElementsByClassName('not-found')[0].style.display = "block";
      } else {
        document.getElementsByClassName('not-found')[0].style.display = "none";
      }
    } else {
      if (e.matchingItems.length == 1) {
        document.getElementsByClassName('not-found')[0].style.display = "block";
      } else {
        document.getElementsByClassName('not-found')[0].style.display = "none";
      }
    }
  });