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
  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const parent = icon.parentElement;
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

  var swiperContainer = document.querySelector(".mySwiper");
  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper", {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 55,
      breakpoints: {
        789: {
          slidesPerView: "auto",
          spaceBetween: 55,
        },
        0: {
          grabCursor: true,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#swiper-svg_arr-next",
      },
      on: {
        slideChange: function () {
          const contents = document.querySelectorAll(
            ".main-banner_content-block"
          );
          contents.forEach((content) => {
            content.classList.remove("active");
            content.style.display = "none";
          });

          const activeIndex = this.activeIndex + 1;
          const activeContent = document.getElementById(
            `content${activeIndex}`
          );
          activeContent.style.display = "grid";
          requestAnimationFrame(() => {
            activeContent.classList.add("active");
          });
        },
      },
      initialSlide: 1,
    });
  } else {
    console.warn("Swiper контейнер не найден: .mySwiper");
  }
  const contents = document.querySelectorAll(".main-banner_content-block");
  contents.forEach((content, index) => {
    if (index === 0) {
      content.style.display = "grid"; 
      requestAnimationFrame(() => {
        content.classList.add("active"); 
      });
    } else {
      content.style.display = "none"; 
    }
  });
});
