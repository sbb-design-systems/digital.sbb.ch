
var toggler = document.getElementsByClassName("has-subcategory");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.querySelector(".subcategory").classList.toggle("open");
    this.classList.toggle("selected");
  });
}