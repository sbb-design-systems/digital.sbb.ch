(function() {
     window.addEventListener(
       "message",
       (event) => {
        if (event.data && event.data.key == "iframeheight") {
           let iframe = document.getElementById(event.data.id);
           iframe.height = event.data.height;
        } 
        else if (event.data) {
          let a;
          try {
              a = JSON.parse(event.data);
              //a = event.data;
          } catch (e) {
              return console.warn(e);
          }

          if (a.event.type == "storybook/docs/snippet-rendered") {
                
            let text = a.event.args[0].source;
            let button = document.querySelector('[data-iframeid="' + a.event.args[0].id + '"]');
            button.addEventListener("click", () => writeClipboardText(text));
            
  
  
            let iframe = document.getElementById(a.event.args[0].id);
            let container = document.createElement("pre");
            container.classList.add('hidden');
            container.setAttribute("data-codeid", a.event.args[0].id);
            let code = document.createElement("code");
            code.classList.add('language-html');
            code.classList.add('hljs');
            
  
            const highlightedCode = hljs.highlight(
                a.event.args[0].source,
                { language: 'html' }
              ).value
            
            code.insertAdjacentHTML( 'beforeend', highlightedCode);
            container.appendChild(code);
            iframe.after(container);
  
            let codetoggle = document.querySelector('[data-codetoggle="' + a.event.args[0].id + '"]');
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