document.addEventListener("DOMContentLoaded", function () {
    var swiperContainer = document.querySelector(".mySwiper1");
    if (swiperContainer) {
      var swiper = new Swiper(".mySwiper1", {
        slidesPerView: "auto",
        // spaceBetween: 16,
        breakpoints: {
          789: {
            slidesPerView: "auto",
            // spaceBetween: 16,
          },
          0: {
            grabCursor: true,
            spaceBetween: 20,
          },
        },
      });
    } else {
      console.warn("Swiper контейнер не найден: .mySwiper1");
    }
});