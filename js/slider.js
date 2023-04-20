const swiper = new Swiper("#slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const slider = document.querySelector("#slider");
const slides = document.querySelectorAll(".SliderSlide");
const prev_slide = document.querySelector("#prev_slide");
const next_slide = document.querySelector("#next_slide");

let currentSlide = 0;

function changeSlide(index) {
  slides[currentSlide].classList.remove("CurrentSlide");
  currentSlide = index;
  slides[currentSlide].classList.add("CurrentSlide");
}
setInterval(function () {
  let nextSlide = (currentSlide + 1) % slides.length;
  changeSlide(nextSlide);
}, 5000);
