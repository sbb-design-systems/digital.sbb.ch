const listtoggler = document.querySelector("#list-toggle");
const teasers = document.querySelectorAll('.component-teaser');
const listtogglericon = listtoggler.getElementsByTagName("sbb-icon")[0];

listtoggler.addEventListener("click", modeSwitch);
function modeSwitch() {
            var hasparent = false;
            var parent = Object

            teasers.forEach(function (img) {
                if (hasparent === false) {
                    parent = img.parentNode
                    hasparent = true;
                }
                img.toggleAttribute("is-stacked");
            });
            parent.classList.toggle("horizontal");
            parent.classList.toggle("vertical");

            if (listtogglericon.getAttribute("name") == "nine-squares-small") {
                listtogglericon.setAttribute("name", "list-small")
            } else {
                listtogglericon.setAttribute("name", "nine-squares-small");
            }
        
}