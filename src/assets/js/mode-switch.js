(function() {
const html = document.documentElement;
const toggle = document.querySelector('.mode-switch');

// Keys für localStorage
const STORAGE_KEY = 'theme';

// Theme anwenden
function applyTheme(mode) {
    html.classList.remove('sbb-light', 'sbb-dark', 'sbb-light-dark');

    if (mode === 'light') {
    html.classList.add('sbb-light');
    toggle.value = 'light';
    } else if (mode === 'dark') {
    html.classList.add('sbb-dark');
    toggle.value = 'dark';
    } else {
    // system setting
    html.classList.add('sbb-light-dark');
    toggle.value = 'light'; // default toggle-position (kann angepasst werden)
    }
}

// Initialisieren: aus localStorage oder system setting
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
    applyTheme(saved);
} else {
    // system setting auslesen
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
}

// Toggle Listener
toggle.addEventListener('input', (e) => {
    const mode = e.target.value; // light oder dark
    applyTheme(mode);
    localStorage.setItem(STORAGE_KEY, mode);
});
})();
