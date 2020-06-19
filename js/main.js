$(document).ready(function () {
  /*=== Mobile menu button ===*/
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const body = $("body");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    mMenuBtn.toggleClass("active");
    body.toggleClass("no-scroll");
  });

  /*=== News slider ===*/
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
