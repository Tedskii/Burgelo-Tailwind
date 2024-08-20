const subMenu = document.querySelector(".header__sub");
const home = document.querySelector(".nav li:first-child");
const katawan = document.querySelector("body");

home.addEventListener("mouseover", () => {
  subMenu.classList.add("open");
  home.classList.add("open");
});
home.addEventListener("mouseout", () => {
  subMenu.classList.remove("open");
  home.classList.remove("open");
});
subMenu.addEventListener("mouseover", () => {
  subMenu.classList.add("open");
  home.classList.add("open");
});
subMenu.addEventListener("mouseout", () => {
  subMenu.classList.remove("open");
  home.classList.remove("open");
});
// katawan.addEventListener("click", () => {
//   subMenu.classList.remove("open");
//   home.classList.remove("open");
// });

