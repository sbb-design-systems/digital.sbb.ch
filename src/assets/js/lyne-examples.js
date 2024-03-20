(function() {
     window.addEventListener(
       "message",
       (event) => {

        let objFromStr=JSON.parse(event.data);

        if (event.data && event.data.key == "iframeheight") {
           let iframe = document.getElementById(event.data.id);
           iframe.height = event.data.height;
        } 
        else if (objFromStr.event.type == "storybook/docs/snippet-rendered") {
                
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