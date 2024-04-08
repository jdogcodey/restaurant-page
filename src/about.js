function aboutPage() {
  const container = document.querySelector("#content");
  const hOne = container.appendChild(document.createElement("h1"));
  hOne.textContent = "This page is about our restaurant";
  const p = container.appendChild(document.createElement("p"));
  p.textContent =
    "Lots of text here that describes the restaurant for anyone who wants to read it.";
}

export { aboutPage };
