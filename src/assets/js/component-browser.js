// Komponenten-Browser (Übersicht und Sidebar): Suche, Kategorie-Filter, Listen-/Kachelansicht.
// In eine Funktion gekapselt, damit keine globalen Namen mit Inline-Skripten anderer Inhalte kollidieren
// (z. B. "buttons" im Dialog-Playground). Global bleiben nur die Funktionen für die onchange-Attribute.
(() => {
  const patterncategories = document.getElementById("categories");
  const searchinput = document.getElementById("search-input");
  const resetbutton = document.getElementById("search-reset");

  const options = {
    valueNames: [
      'search-title',
      'subtitle',
      {
        data: ['keywords']
      },
      {
        data: ['categories']
      }
    ],
    // Die Fuzzy-Suche findet standardmässig nur Treffer in den ersten ~100 Zeichen eines Feldes.
    // Lyne-Komponenten haben viele Elementnamen in den Stichworten (z. B. 15 bei Button).
    fuzzySearch: {
      searchClass: 'fuzzy-search',
      location: 0,
      distance: 2000,
      threshold: 0.2,
      multiSearch: true
    }
  };
  const componentlist = new List('componentbrowser', options);

  // Ursprüngliche Reihenfolge und Bereich (Design Tokens, Komponenten, Templates …) merken:
  // die Reihenfolge, um sie nach dem Leeren der Suche wiederherzustellen, den Bereich für die Zwischentitel
  const sectionOrder = [];
  componentlist.items.forEach((item, index) => {
    item.originalOrder = index;
    const section = item.elm.dataset.section || "";
    if (!sectionOrder.includes(section)) sectionOrder.push(section);
    item.sectionOrder = sectionOrder.indexOf(section);
  });

  // Zwischentitel der Bereiche: eigene Zeilen vor dem ersten sichtbaren Eintrag jedes Bereichs.
  // Sie sind keine List.js-Einträge und stören die Suche nicht; List.js leert die Liste bei jedem Update,
  // deshalb werden sie danach neu eingefügt. Hat ein Bereich keine Treffer mehr, fehlt auch sein Titel.
  const listElement = componentlist.list;
  const renderSectionTitles = () => {
    listElement.querySelectorAll(".component-list-section").forEach((title) => title.remove());
    let previous = null;
    componentlist.visibleItems.forEach((item) => {
      const section = item.elm.dataset.section;
      if (section !== previous && item.elm.dataset.sectionTitle) {
        const title = document.createElement("li");
        title.className = "component-list-section";
        title.textContent = item.elm.dataset.sectionTitle;
        item.elm.before(title);
      }
      previous = section;
    });
  };

  // Nach einer Suche oder einem Filter an den Anfang der Treffer scrollen, falls die Liste schon weiter
  // gescrollt war (z. B. in der Sidebar nach der Auswahl einer Komponente weit unten). Der Scroll-Container
  // liegt je nach Seite im Shadow DOM der Sidebar oder ist die Seite selbst; der Suchbereich ist sticky.
  const searchArea = document.querySelector("#componentbrowser .component-search");
  const scrollParent = (element) => {
    let node = element;
    while (node) {
      node = node.assignedSlot || node.parentElement || node.getRootNode().host;
      if (!node || node === document.documentElement) break;
      const overflow = getComputedStyle(node).overflowY;
      if ((overflow === "auto" || overflow === "scroll") && node.scrollHeight > node.clientHeight) return node;
    }
    return document.scrollingElement;
  };
  const scrollToResults = () => {
    const offset = searchArea ? searchArea.getBoundingClientRect().bottom : 0;
    const distance = listElement.getBoundingClientRect().top - offset;
    if (distance < 0) scrollParent(listElement).scrollBy({ top: distance });
  };

  // Relevanz eines Treffers: exakter Titel, Titel beginnt mit, Titel enthält, sonst (Stichworte/Elemente)
  const normalize = (value) => (value || "").toLowerCase().replace(/^sbb-/, "").replace(/[\s_-]+/g, " ").trim();
  const relevance = (item, query) => {
    const title = normalize(item.values()['search-title']);
    if (title === query) return 0;
    if (title.startsWith(query)) return 1;
    if (title.includes(query)) return 2;
    return 3;
  };

  let sorting = false;
  const sortByRelevance = () => {
    if (sorting) return;
    sorting = true;
    const query = normalize(searchinput ? searchinput.value : "");
    componentlist.sort('search-title', {
      // Bereiche bleiben zusammen, damit die Zwischentitel stimmen; innerhalb eines Bereichs nach Relevanz
      sortFunction: (a, b) => (a.sectionOrder - b.sectionOrder) || (query
        ? (relevance(a, query) - relevance(b, query)) || (a.originalOrder - b.originalOrder)
        : a.originalOrder - b.originalOrder)
    });
    sorting = false;
  };

  const showNotFound = (e) => {
    const notFound = document.getElementsByClassName('not-found')[0];
    if (notFound) notFound.style.display = e.matchingItems.length == 0 ? "block" : "none";
  };

  if (patterncategories) {
    patterncategories.addEventListener('change', function () {
      const selectedFilter = patterncategories.value;
      componentlist.filter(function (item) {
        const categories = item.values().categories;
        if (selectedFilter.includes("all")) {
          return true;
        }
        const categoryArr = (categories || "").split(',').map(c => c.trim());
        return categoryArr.some(cat => selectedFilter.includes(cat));
      });
    });
  }

  window.uncheckAllTag = () => {
    document.getElementById('all').checked = false;
  };

  window.uncheckTags = () => {
    Array.from(document.querySelectorAll('sbb-tag'))
      .filter((e) => e.getAttribute('id') !== 'all' && !e.getAttribute('disabled'))
      .forEach((e) => e.checked = false);
  };

  if (resetbutton) {
    resetbutton.addEventListener('click', function () {
      if (searchinput) {
        searchinput.value = '';
        searchinput.focus();
        resetbutton.style.display = "none";
      }
      componentlist.search();
    });
  }

  if (searchinput) {
    searchinput.addEventListener("keyup", () => {
      resetbutton.style.display = searchinput.value.length ? "block" : "none";
    });
  }

  componentlist.on('searchComplete', function (e) {
    showNotFound(e);
    sortByRelevance();
    scrollToResults();
  });
  componentlist.on('filterComplete', function (e) {
    showNotFound(e);
    scrollToResults();
  });
  componentlist.on('updated', renderSectionTitles);
  renderSectionTitles();

  // list / grid view list
  const toggle = document.getElementById('viewToggle');
  const list = document.getElementById('componentList');
  const STORAGE_KEY = 'viewMode';

  if (toggle && list) {
    // 1. Zustand beim Laden wiederherstellen
    const savedView = localStorage.getItem(STORAGE_KEY);
    if (savedView) {
      toggle.value = savedView; // Toggle setzen
      list.classList.remove('list-view', 'grid-view');
      list.classList.add(savedView + '-view'); // Liste setzen
    }

    // 2. Neue Auswahl speichern
    toggle.addEventListener('change', (event) => {
      const view = event.target.value;

      list.classList.remove('list-view', 'grid-view');
      list.classList.add(view + '-view');

      localStorage.setItem(STORAGE_KEY, view);
    });
  }
})();
