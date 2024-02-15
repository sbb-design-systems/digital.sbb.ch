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


(function() {
     window.addEventListener(
       "message",
       (event) => {
        //console.log(event.data.event);
         //if (event.origin !== "http://localhost:6006") return;
         if (event.data && event.data.key == "iframeheight") {
           let iframe = document.getElementById(event.data.id);
           iframe.height = event.data.height;
           if (event.data.height <= 96) {
            //iframe.height = event.data.height + 96;
           } 
           
           //console.log(event.data.id);
         } else {
            let objFromStr=JSON.parse(event.data);

            //printing the object
            //console.log(objFromStr);
            if (objFromStr.event.type == "storybook/docs/snippet-rendered") {
                let iframe = document.getElementById(objFromStr.event.args[0].id);

                let container = document.createElement("pre");
                container.classList.add('language-html');
                let code = document.createElement("code");
                code.classList.add('language-html');

                function HtmlEncode(s)
                {
                    var el = document.createElement("div");
                    el.innerText = el.textContent = s;
                    s = el.innerHTML;
                    return s;
                }
                
                code.insertAdjacentHTML( 'beforeend', HtmlEncode(objFromStr.event.args[0].source));



                
                container.appendChild(code);
 

                iframe.after(container);

                //console.log(container.outerHTML);



                //console.log(objFromStr.event.args[0].id);
                //console.log(objFromStr.event.args[0].source);
                //console.log(objFromStr);
            }
         }
       },
       false,
     );
 })();

 