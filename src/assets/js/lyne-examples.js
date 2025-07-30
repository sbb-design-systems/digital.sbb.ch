(function () {
  window.addEventListener(
    "message",
    (event) => {
      if (event.data && event.data.key === "iframeheight") {
        const maxIterations = 2;
        const iframe = document.getElementById(event.data.id);
        if (!iframe) return;
        const currentCount = parseInt(iframe.getAttribute('dart-set-height-iterations') ?? 0, 10);
        if (currentCount <= maxIterations && event.data.height > 0) {
          iframe.height = event.data.height;
          iframe.setAttribute('dart-set-height-iterations', currentCount + 1);
        }
        return;
      }

      if (!event.data) return;

      let a;
      try {
        a = JSON.parse(event.data);
      } catch {
        // Kein gültiges JSON, kein Storybook-Event
        return;
      }

      if (a?.event?.type === "storybook/docs/snippet-rendered") {
        const { id, source } = a.event.args[0];

        const button = document.querySelector(`[data-iframeid="${id}"]`);
        if (button) {
          button.addEventListener("click", () => writeClipboardText(source));
        }

        const iframe = document.getElementById(id);
        if (!iframe) return;

        const container = document.createElement("pre");
        container.classList.add('hidden');
        container.setAttribute("data-codeid", id);

        const code = document.createElement("code");
        code.classList.add('language-html', 'hljs');

        const highlightedCode = hljs.highlight(source, { language: 'html' }).value;
        code.insertAdjacentHTML('beforeend', highlightedCode);
        container.appendChild(code);
        iframe.after(container);

        const codetoggle = document.querySelector(`[data-codetoggle="${id}"]`);
        if (codetoggle) {
          codetoggle.addEventListener('click', function (e) {
            e.preventDefault();
            this.toggleAttribute('checked', !this.checked);
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
    document.querySelector('#clipboard-toast')?.open();
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}