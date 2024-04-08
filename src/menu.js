function menuContent() {
  const container = document.querySelector("#content");
  const hOne = container.appendChild(document.createElement("h1"));
  hOne.textContent = "Our Menu";
  const table = container.appendChild(document.createElement("table"));
  const rowOne = table.appendChild(document.createElement("tr"));
  const foodItem = (rowOne.appendChild(
    document.createElement("th")
  ).textContent = "Food Name");
  const description = (rowOne.appendChild(
    document.createElement("th")
  ).textContent = "Description");
  const allergyInformation = (rowOne.appendChild(
    document.createElement("th")
  ).textContent = "Allergy Information");
  function createMenuItem(food, desc, all) {
    const row = table.appendChild(document.createElement("tr"));
    const menuItem = row.appendChild(document.createElement("td"));
    menuItem.textContent = `${food}`;
    const menuDescri = row.appendChild(document.createElement("td"));
    menuDescri.textContent = `${desc}`;
    const allergy = row.appendChild(document.createElement("td"));
    allergy.textContent = `${all}`;
  }
  const lasagna = createMenuItem(
    "Lasagna",
    "Beef mince sandwiched between sheets of pasta and a creamy sauce",
    "Contains milk"
  );
  const pizza = createMenuItem(
    "Pizza",
    "A thin crispy bread with tomato sauce and cheese",
    "Contains cheese and gluten"
  );
}

export { menuContent };
