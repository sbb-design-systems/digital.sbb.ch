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

var dialog = document.querySelector('dialog');
document.querySelector('#toggle-component-browser').onclick = function() {
    //dialog.show();
    dialog.showModal();
};
document.querySelector('#close-browser').onclick = function() {
    dialog.classList.add('hide-sidebar');
    
    
    setTimeout(function(){
        dialog.classList.remove('hide-sidebar');
        dialog.close();
    }, 500);
    
};


