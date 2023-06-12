const switcher = document.querySelectorAll(".switch");
const images = document.querySelectorAll('.boxed-image');
switcher.forEach(function (element) {
    element.addEventListener("click", modeSwitch);
});
number = 0;
function modeSwitch() {
        if (this.value != this.parentNode.value) {
            switcher.forEach(function (tog) {
                if(number % 2 == 0) {                
                    if (tog.parentNode.value == "dark") {
                        tog.parentNode.value = "light";
                    } else {
                        tog.parentNode.value = "dark";
                    }
                }
                number++;
            });
            images.forEach(function (img) {
                img.classList.toggle("light");
                img.classList.toggle("dark");
            });
        }
}