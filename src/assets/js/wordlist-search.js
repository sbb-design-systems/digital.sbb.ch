// -------------------------------------------------------
// search.js – Tabelle rendern & Suche
// Erwartet: wordlist (Array) aus wordlist.js
// -------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const tbody = document.getElementById("table-body");
    const resultCount = document.getElementById("result-count");
    wordlist.sort((a, b) => a.Begriff.localeCompare(b.Begriff, "de"));

    // --- Tabelle rendern ---
    function renderTable(data) {
        tbody.innerHTML = "";

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" class="no-results">Keine Einträge gefunden.</td></tr>`;
            resultCount.textContent = "0 Einträge";
            return;
        }

        data.forEach(entry => {
            const term = searchInput.value.trim().toLowerCase();
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${highlight(entry.Begriff, term)}</td>
                <td>${highlight(entry.Alternative, term)}</td>
                <td>${highlight(entry.Hinweis, term)}</td>
            `;
            tbody.appendChild(tr);
        });

        resultCount.textContent = `${data.length} ${data.length === 1 ? "Eintrag" : "Einträge"}`;
    }

    // --- Suchbegriff hervorheben ---
    function highlight(text, term) {
        if (!term) return text;
        const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${escaped})`, "gi");
        return text.replace(regex, `<mark>$1</mark>`);
    }

    // --- Filtern ---
    function filterList(term) {
        if (!term) return wordlist;
        const lower = term.toLowerCase();
        return wordlist.filter(entry =>
            entry.Begriff.toLowerCase().includes(lower) ||
            entry.Alternative.toLowerCase().includes(lower) ||
            entry.Hinweis.toLowerCase().includes(lower)
        );
    }

    // --- Event Listener ---
    searchInput.addEventListener("input", () => {
        const term = searchInput.value.trim();
        renderTable(filterList(term));
    });

    // --- Initial laden ---
    renderTable(wordlist);
});
