const subMenu = document.querySelector(".header__sub");
const home = document.querySelector(".nav li:first-child");

home.addEventListener("click", () => {
  subMenu.classList.toggle("open");
  home.classList.toggle("open");
});
