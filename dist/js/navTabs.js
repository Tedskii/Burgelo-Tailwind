const foodNav = document.querySelectorAll(".foodNav__link");
const foodContent = document.querySelectorAll(".foodTab__content");

foodNav.forEach((food) => {
  food.addEventListener("click", () => {
    foodNav.forEach((f) => f.classList.remove("active"));
    foodContent.forEach((c) => c.classList.remove("active"));

    food.classList.add("active");
    document.querySelector(`#${food.id}-content`).classList.add("active");
  });
});
