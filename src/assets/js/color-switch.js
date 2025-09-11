const toggle = document.querySelector('.color-switch');
const colorGroup = document.getElementById('color-group');

function updateColors(mode) {
  const cards = colorGroup.querySelectorAll('.color');
  cards.forEach(card => {
    if (card.dataset.mode === mode) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

toggle.addEventListener('change', (e) => {
  const mode = e.target.value;
  colorGroup.setAttribute('data-mode', mode);
  updateColors(mode);
});

// Initial anzeigen (z.B. "light")
updateColors('light');