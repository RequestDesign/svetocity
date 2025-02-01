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
    var swiperContainer = document.querySelector(".mySwiper2");
    if (swiperContainer) {
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: "#swiper-btn_next",
            prevEl: "#swiper-btn_prev",
          },
        breakpoints: {
          789: {
            slidesPerView: "auto",
          },
          0: {
            grabCursor: true,
            spaceBetween: 20,
          },
        },
      });
    } else {
      console.warn("Swiper контейнер не найден: .mySwiper2");
    }

    const heartIcons = document.querySelectorAll(".heard-slide");
    heartIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const parent = icon.parentElement; // Получаем родительский элемент
            const inactive = parent.querySelector(".heard-slide_noactive");
            const active = parent.querySelector(".heard-slide_active");

            if (inactive && active) {
                if (inactive.style.display === "none") {
                    inactive.style.display = "block";
                    active.style.display = "none";
                } else {
                    inactive.style.display = "none";
                    active.style.display = "block";
                }
            }
        });
    });
});