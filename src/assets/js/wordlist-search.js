// -------------------------------------------------------
// search.js – Tabelle rendern & Suche
// Erwartet: wordlist (Array) aus wordlist.js
// -------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    // Detect page language from HTML lang attribute
    const pageLanguage = document.documentElement.lang || "de";
    
    // Select appropriate wordlist and locale based on page language
    let activeWordlist = wordlist;
    let locale = "de";
    let entrySingular = "Eintrag";
    let entryPlural = "Einträge";
    let noResults = "Keine Einträge gefunden.";
    
    if (pageLanguage.startsWith("fr") && typeof wordlist_fr !== "undefined") {
        activeWordlist = wordlist_fr;
        locale = "fr";
        entryPlural = "Entrées";
        entrySingular = "Entrée";
        noResults = "Aucune entrée trouvée.";
    }

    if (pageLanguage.startsWith("en") && typeof wordlist_en !== "undefined") {
        activeWordlist = wordlist_en;
        locale = "en";
        entryPlural = "Entries";
        entrySingular = "Entry";
        noResults = "No Results Found.";
    }
    
    const searchInput = document.getElementById("search");
    const tbody = document.getElementById("table-body");
    const resultCount = document.getElementById("result-count");
    
    if (!searchInput || !tbody || !resultCount) return;
    
    activeWordlist.sort((a, b) => a.Begriff.localeCompare(b.Begriff, locale));

    // --- Tabelle rendern ---
    function renderTable(data) {
        tbody.innerHTML = "";

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" class="no-results">${noResults}</td></tr>`;
            resultCount.textContent = "0 " + entryPlural;
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

        resultCount.textContent = `${data.length} ${data.length === 1 ? entrySingular : entryPlural}`;
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
        if (!term) return activeWordlist;
        const lower = term.toLowerCase();
        return activeWordlist.filter(entry =>
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
    renderTable(activeWordlist);
});
