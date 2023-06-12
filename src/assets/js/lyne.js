var elements = document.getElementsByTagName("h3");

for (var i = 0; i < elements.length; i++) {
  if (elements[i].textContent === "Graph") {
    elements[i].classList.add("hidden");
  }
}