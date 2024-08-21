const switcher = document.querySelectorAll(".switcher");
const images = document.querySelectorAll('.boxed-image');
switcher.forEach(function (element) {
    element.addEventListener("change", modeSwitch);
});
number = 0;
function modeSwitch() {
    if (this.value == "light") {
        switcher.forEach(function (element) {
            element.firstElementChild.click();
            images.forEach(function (element) {
                element.classList.add("light");
                element.classList.remove("dark");
            });
        });
    } else {
        switcher.forEach(function (element) {
            element.lastElementChild.click();
            images.forEach(function (element) {
                element.classList.add("dark");
                element.classList.remove("light");
            });
        });
    }        
}