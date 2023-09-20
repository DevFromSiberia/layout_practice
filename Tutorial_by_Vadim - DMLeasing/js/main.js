const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-items");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => {
    item.classList.remove("tabs__btn-item--active");
  });
  tabTarget.classList.add("tabs__btn-item--active");

  tabContent.forEach((item) => {
    item.classList.remove("tabs__content-items--active");
  });
  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-items--active");
}

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "fade",
});
