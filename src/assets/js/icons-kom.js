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


sizes.addEventListener('change', function() {
  let selectedFilter = sizes.value;
  let otherFilter = categories.value;

  iconlist.filter(function(item) {

      //console.log(item.values());

      if (selectedFilter == "all" && otherFilter == "all") {
        //alert("case 1");
          return true;
      }
      if (selectedFilter == "all" && item.values().category === otherFilter) {
        //alert("case 2");
        return item;
      }
      if (item.values().size.indexOf(selectedFilter) >= 0 && item.values().category === otherFilter) {
        //alert("case 3");
          return item;
      }
      if (item.values().size.indexOf(selectedFilter) >= 0 && otherFilter == "all") {
        //alert("case 4");
        return item;
      }
  }
  );
  
});

categories.addEventListener('change', function() {
  let selectedFilter = categories.value;
  let otherFilter = sizes.value;

  iconlist.filter(function(item) {

    //console.log(item.values());

      if (selectedFilter == "all" && otherFilter == "all") {
        //alert("case 5");
          return true;
      }
      if (selectedFilter == "all" && item.values().size.indexOf(otherFilter) >= 0 ) {
        //alert("case 6");
        return item;
      }
      if (item.values().category === selectedFilter && item.values().size.indexOf(otherFilter) >= 0) {
        //alert("case 7");
          return item;
      }
      if (item.values().category === selectedFilter && otherFilter == "all") {
        //alert("case 8");
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
