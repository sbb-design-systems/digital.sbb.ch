var options = {
    valueNames: [
    'description',
      {
          data: ['keywords']
      }
    ]
  };
var componentlist = new List('componentbrowser', options);

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


const hugeDiv = document.querySelectorAll("#scroll-position")[0];
const storedScrollPosition = localStorage.getItem("scrollPos")
  ? localStorage.getItem("scrollPos")
  : 0;

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  localStorage.setItem("scrollPos", lastKnownScrollPosition);
}


document.querySelector('#scroll-position')?.addEventListener('scroll', () => {
  
  console.log(lastKnownScrollPosition);
  lastKnownScrollPosition = hugeDiv.scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});







/*

var dialog = document.querySelector('dialog');


document.querySelector('#toggle-component-browser').onclick = function() {
    dialog.showModal();

    if (hugeDiv != null) {
      hugeDiv.scrollTo(0, storedScrollPosition);
    }
};




document.querySelector('#close-browser').onclick = function() {
    dialog.classList.add('hide-sidebar');
    
    
    setTimeout(function(){
        dialog.classList.remove('hide-sidebar');
        dialog.close();
    }, 500);
    
};
*/


var sidebar = document.getElementById("sidebar");
document.querySelector('#toggle-component-browser').onclick = function() {
  sidebar.open();
};
