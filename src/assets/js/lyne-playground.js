document.addEventListener('DOMContentLoaded', function() {
    let radios = document.querySelectorAll('sbb-radio-button-group');
    radios.forEach(radio => radio.addEventListener("change", (event) => {
        const datamode = radio.getAttribute("data-mode");
        const datatarget = radio.getAttribute("data-target");
        const dataproperty = radio.getAttribute("data-property");
        const value = event.target.value;
        const targets = document.querySelectorAll("." + datatarget);

        targets.forEach((element) => {
            switch (datamode) {
                case "property":
                    element.setAttribute(dataproperty, value);
                    break;
                case "boolean":
                    if (value === "true") {
                        element.setAttribute(dataproperty, "");
                    } else {
                        element.removeAttribute(dataproperty);
                    }
                    break;
                case "removetag":
                    if (value.length > 0) {
                        element.setAttribute(dataproperty, value);
                    } else {
                        element.removeAttribute(dataproperty);
                    }
                    break;
                case "value":
                    element.innerHTML = value;
                    break;
                case "slot":
                    element.setAttribute(datamode, value);
                    break;
            }
        });

        console.log("Datamode:", datamode);
        console.log("Target class:", datatarget);
        console.log("Property:", dataproperty);
        console.log("Value:", value);
    }));
});