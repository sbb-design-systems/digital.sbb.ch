// sidebar aufrufen
var sidebar = document.getElementById("sidebar");
var activecard = document.getElementById("active-card");
document.querySelector('#toggle-component-browser').onclick = function() {
  sidebar.open();
  activecard.scrollIntoView({ behavior: "instant", block: "center" });
};