/*

const toplevelcontainer = document.querySelector('.toplevel');
const navtrigger = document.querySelector('#nav-trigger');

function triggerClick(element) {
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

navtrigger.addEventListener('click', function (event) {
    toplevelcontainer.querySelectorAll('sbb-navigation-action').forEach(function (link) {
        // Prüfe, ob der Link die Klasse "is-active" hat
        if (link.classList.contains('is-active')) {
        // Löse den Klick-Event auf dem Link aus
        triggerClick(link);
        }
    });

  });

  
*/