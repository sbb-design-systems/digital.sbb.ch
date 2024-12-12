document.addEventListener('DOMContentLoaded', function() {
    let radios = document.querySelectorAll('sbb-radio-button-group');
    radios.forEach(radio => radio.addEventListener("change", (event) => {
        
        let datamode = radio.getAttribute("data-mode");
        let datatarget = radio.getAttribute("data-target");
        let dataproperty = radio.getAttribute("data-property");

        let targets = document.querySelectorAll("."+datatarget);



        targets.forEach((element) => {
            
            if (datamode == "property") {
                element.setAttribute(dataproperty, event.target.value);
            }
            if (datamode == "boolean") {
                if (event.target.value == "true") {
                    element.setAttribute(dataproperty, "");

                } else {
                    element.removeAttribute(dataproperty);
                }
            }
            if (datamode == "removetag") {
                if (event.target.value.length > 0) {
                    element.setAttribute(dataproperty, event.target.value);
                } else {
                    element.removeAttribute(dataproperty);
                }
            }
            if (datamode == "value") {
                element.innerHTML = event.target.value;
            }
            if (datamode == "slot") {
                element.setAttribute(datamode, event.target.value);
            }
            /*
            if (datamode == "tagchange") {
                let oldtags = document.querySelectorAll("."+datatarget);
                let newvalue = event.target.value;
                oldtags.forEach((oldtag) => {
                    let newtag = document.createElement(newvalue);
                    newtag.innerHTML = oldtag.innerHTML;
                    newtag.setAttribute("class", dataproperty);
                    oldtag.parentNode.insertBefore(newtag, oldtag);
                    oldtag.parentNode.removeChild(oldtag);
                });
            }
            */


        });

        console.log("Datamode:", datamode);
        console.log("Target class:", datatarget);
        console.log("Property:", dataproperty);
        console.log("Value:", event.target.value);
    }));
});
