const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  autoplay: true,

  slidesPerView: 1.2,
  spaceBetween: 40,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
