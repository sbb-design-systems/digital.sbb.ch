const patterntypes = document.getElementById("types");
const systems = document.getElementById("systems");

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
        data: ['type']
      },
      {
        data: ['system']
      },
      {
        data: ['description']
      },
      {
        data: ['contact']
      },
      {
        data: ['openedby']
      },
    ]
  };
var communitylist = new List('communitylist', options);
  
function buttonClicked(index) {
  const dialog = document.getElementById("dialog-"+(index + 1));
  console.log(dialog.id);
  dialog.open(event);
}

buttons.forEach((button, index) => {
button.addEventListener("click", () => buttonClicked(index));
});




patterntypes.addEventListener('change', function() {
    let selectedFilter = patterntypes.value;
    let otherFilter = systems.value;
    
    communitylist.filter(function(item) {
      if ((selectedFilter == "all" && otherFilter == "all") || (selectedFilter == "all" && otherFilter == undefined)) {
        //alert("case 5");
          return true;
      }
        if (selectedFilter == "all" && item.values().system === otherFilter) {
          //alert("case 2");
          return item;
        }
        if (item.values().type === selectedFilter && item.values().system === otherFilter) {
          //alert("case 3");
            return item;
        }
        if (item.values().type === selectedFilter && otherFilter == "all") {
          //alert("case 4");
          return item;
        }
    }
    );
    
});
  
systems.addEventListener('change', function() {
  let selectedFilter = systems.value;
  let otherFilter = patterntypes.value;

  communitylist.filter(function(item) {
      if ((selectedFilter == "all" && otherFilter == "all") || (selectedFilter == "all" && otherFilter == undefined)) {
        //alert("case 5");
          return true;
      }
      if (selectedFilter == "all" && item.values().type === otherFilter ) {
        //alert("case 6");
        return item;
      }
      if (item.values().system === selectedFilter && item.values().type === otherFilter) {
        //alert("case 7");
          return item;
      }
      if (item.values().system === selectedFilter && otherFilter == "all") {
        //alert("case 8");
        return item;
      }
  }
  );
  
});
  


resetbutton.addEventListener('click', function() {
  if (searchinput) {
    searchinput.value = '';
    searchinput.focus();
    resetbutton.style.display = "none";
  }
  communitylist.search();
});


searchinput.addEventListener("keyup", (event) => {
  if (searchinput.value.length) {
    resetbutton.style.display = "block";
  } else {
    resetbutton.style.display = "none";
  }
});

communitylist.on('searchComplete', function (e) {
  if (e.matchingItems.length == 0) {
    document.getElementsByClassName('not-found')[0].style.display = "block";
  } else {
    document.getElementsByClassName('not-found')[0].style.display = "none";
  }
});
communitylist.on('filterComplete', function (e) {
  if (e.matchingItems.length == 0) {
    document.getElementsByClassName('not-found')[0].style.display = "block";
  } else {
    document.getElementsByClassName('not-found')[0].style.display = "none";
  }
});

  


