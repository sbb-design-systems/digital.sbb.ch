document.addEventListener('DOMContentLoaded', function() {
    let radios = document.querySelectorAll('sbb-radio-button-group');
    radios.forEach(radio => radio.addEventListener('change', function() {
        
        let datamode = radio.getAttribute("data-mode");
        let datatarget = radio.getAttribute("data-target");
        let dataproperty = radio.getAttribute("data-property");

        let targets = document.querySelectorAll("."+datatarget);

        targets.forEach((element) => {
            if (datamode == "property") {
                element.setAttribute(dataproperty, this.value);
            }
            if (datamode == "boolean") {
                if (this.value == "true") {
                    element.setAttribute(dataproperty, "");
                } else {
                    element.removeAttribute(dataproperty);
                }
            }
            if (datamode == "removetag") {
                if (this.value.length > 0) {
                    alert("nicht leer")
                    element.setAttribute(dataproperty, this.value);
                } else {
                    element.removeAttribute(dataproperty);
                }
            }
            if (datamode == "value") {
                element.innerHTML = this.value;
            }
            if (datamode == "slot") {
                element.setAttribute(datamode, this.value);
            }
            if (datamode == "tagchange") {
                let oldtags = document.querySelectorAll("."+datatarget);
                let newvalue = this.value;
                oldtags.forEach((oldtag) => {
                    let newtag = document.createElement(newvalue);
                    newtag.innerHTML = oldtag.innerHTML;
                    newtag.setAttribute("class", dataproperty);
                    oldtag.parentNode.insertBefore(newtag, oldtag);
                    oldtag.parentNode.removeChild(oldtag);
                });
            }
        });
    }));
});