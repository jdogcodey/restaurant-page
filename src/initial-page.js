(pageContent = () => {
  const container = document.querySelector("#content");
  createChild = (parent, child, textContent) => {
    return (parent.appendChild(
      document.createElement(`${child}`)
    ).textContent = `${textContent}`);
  };
  const hOne = createChild(container, "h1", "This restaurant is amazing");
  const section = container.appendChild(document.createElement("section"));
  const hTwo = createChild(section, "h2", "This is the second section");
  const p = createChild(
    section,
    "p",
    "Lots of text here that tells you something about the restaurant"
  );
  const linkButton = createChild(
    section,
    "button",
    "This button links to something"
  );
  const otherButton = createChild(section, "button", "Something else");
  const table = section.appendChild(document.createElement("table"));
  const rowOne = table.appendChild(document.createElement("tr"));
  createChild(rowOne, "th", "Header");
  createChild(rowOne, "th", "of");
  createChild(rowOne, "th", "the");
  createChild(rowOne, "th", "table");
  const rowTwo = table.appendChild(document.createElement("tr"));
  createChild(rowTwo, "td", "First");
  createChild(rowTwo, "td", "table");
  createChild(rowTwo, "td", "row");
  createChild(rowTwo, "td", "here");
})();

export { pageContent };
