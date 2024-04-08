import { pageContent } from "./initial-page";
import { menuContent } from "./menu";
import { aboutPage } from "./about";

pageContent();
const container = document.querySelector("#content");
document.querySelector("#home").addEventListener("click", function () {
  container.innerHTML = "";
  pageContent();
});
document.querySelector("#menu").addEventListener("click", function () {
  container.innerHTML = "";
  menuContent();
});
document.querySelector("#about").addEventListener("click", function () {
  container.innerHTML = "";
  aboutPage();
});
