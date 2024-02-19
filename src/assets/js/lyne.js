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
         if (event.data && event.data.key == "iframeheight") {
           let iframe = document.getElementById(event.data.id);
           iframe.height = event.data.height;

   
         } else {
            let objFromStr=JSON.parse(event.data);

            //printing the object
            //console.log(objFromStr);
            if (objFromStr.event.type == "storybook/docs/snippet-rendered") {
                
                let text = objFromStr.event.args[0].source;
                let button = document.querySelector('[data-iframeid="' + objFromStr.event.args[0].id + '"]');
                button.addEventListener("click", () => writeClipboardText(text));
                


                let iframe = document.getElementById(objFromStr.event.args[0].id);
                let container = document.createElement("pre");
                container.classList.add('hidden');
                container.setAttribute("data-codeid", objFromStr.event.args[0].id);
                let code = document.createElement("code");
                code.classList.add('language-html');
                code.classList.add('hljs');
                

                const highlightedCode = hljs.highlight(
                    objFromStr.event.args[0].source,
                    { language: 'html' }
                  ).value
                
                code.insertAdjacentHTML( 'beforeend', highlightedCode);
                container.appendChild(code);
                iframe.after(container);

                let codetoggle = document.querySelector('[data-codetoggle="' + objFromStr.event.args[0].id + '"]');
                codetoggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.checked = !this.checked;
                    container.classList.toggle('hidden');        
                  });
              

      
            }
         }
       },
       false,
     );
 })();

 
  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
      let toast = document.querySelector('#clipboard-toast');
        toast.open()
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }