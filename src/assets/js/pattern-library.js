const patterntypes = document.getElementById("types");
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
var patternlist = new List('patternlist', options);
  
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
    patternlist.filter(function(item) {
      if (selectedFilter.includes("all")) {
        return true;
      } else {
        return selectedFilter.includes(item.values().type);
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
  patternlist.search();
});


searchinput.addEventListener("keyup", (event) => {
  if (searchinput.value.length) {
    resetbutton.style.display = "block";
  } else {
    resetbutton.style.display = "none";
  }
});

patternlist.on('searchComplete', function (e) {
  if (e.matchingItems.length == 0) {
    document.getElementsByClassName('not-found')[0].style.display = "block";
  } else {
    document.getElementsByClassName('not-found')[0].style.display = "none";
  }
});
patternlist.on('filterComplete', function (e) {
  if (e.matchingItems.length == 0) {
    document.getElementsByClassName('not-found')[0].style.display = "block";
  } else {
    document.getElementsByClassName('not-found')[0].style.display = "none";
  }
});

  


