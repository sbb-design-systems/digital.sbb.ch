const oneswitch = document.querySelectorAll(".switch");
const images = document.querySelectorAll('.boxed-image');
oneswitch.forEach(function (element) {
    element.addEventListener("click", modeSwitch);
});
number = 0;
function modeSwitch() {
        if (this.value != this.parentElement.value) {
            oneswitch.forEach(function (tog) {
                if(number % 2 == 0) {                
                    if (tog.parentElement.value == "dark") {
                        tog.parentElement.setAttribute("value", "light")
                    } else {
                        tog.parentElement.setAttribute("value", "dark")
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