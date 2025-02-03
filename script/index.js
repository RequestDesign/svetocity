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

  var swiperContainer = document.querySelector(".mySwiper4");

  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper4", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: false,
      speed: 1000,
      navigation: {
        nextEl: "#btn-arr_swip4-next",
      },
      breakpoints: {
        789: {
          slidesPerView: "auto",
          centeredSlides: false,
        },
        0: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 10,
        },
      },
      on: {
        init: function () {
          setTimeout(() => {
            setActiveSlideStyles(swiper.activeIndex);
          }, 100);
        },
        slideChangeTransitionEnd: function () {
          setActiveSlideStyles(swiper.activeIndex);
        },
      },
    });

    function setActiveSlideStyles(activeIndex) {
      swiper.slides.forEach((slide) => {
        slide.classList.remove("swiper-slide-active");
      });

      swiper.slides[activeIndex].classList.add("swiper-slide-active");
    }
  } else {
    console.warn("Swiper контейнер не найден: .mySwiper4");
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
          spaceBetween: 65,
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

  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      dropdownMenus.forEach((menu, i) => {
        if (i !== index) {
          menu.style.display = "none";
        }
      });

      const currentMenu = dropdownMenus[index];
      currentMenu.style.display =
        currentMenu.style.display === "grid" ? "none" : "grid";

      event.stopPropagation();
    });
  });

  document.addEventListener("click", () => {
    dropdownMenus.forEach((menu) => {
      menu.style.display = "none";
    });
  });

  try {
    ymaps.ready(function () {
      var mapElement1 = document.getElementById("map");
      var mapElement3 = document.getElementById("map3");

      if (mapElement1) {
        initMap1();
      } else {
        console.log(
          "Элемент с ID 'map' не найден. Первая карта не будет инициализирована."
        );
      }

      if (mapElement3) {
        initMap3();
      } else {
        console.log(
          "Элемент с ID 'map3' не найден. Третья карта не будет инициализирована."
        );
      }
    });
  } catch (error) {
    console.error(
      "Ошибка: ymaps не определен. Убедитесь, что библиотека Yandex Maps загружена.",
      error
    );
  }

  function initMap1() {
    var myMap1 = new ymaps.Map("map", {
      center: [55.628915, 37.441305],
      zoom: 15,
      controls: ["zoomControl", "typeSelector"],
    });

    var myPlacemark1 = new ymaps.Placemark(
      [55.624815, 37.441336],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "assest/image/shop/map-image.png",
        iconImageSize: [202, 50],
        iconImageOffset: [-20, -50],
      }
    );

    myMap1.geoObjects.add(myPlacemark1);

    updateAddressPosition(myMap1, myPlacemark1, addressDiv1);
  }

  function initMap3() {
    var myMap3 = new ymaps.Map("map3", {
      center: [55.629975, 37.429999],
      zoom: 15,
      controls: ["zoomControl", "typeSelector"],
    });

    var myPlacemark3 = new ymaps.Placemark(
      [55.629975, 37.422889],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "assest/image/shop/map-image.png",
        iconImageSize: [202, 50],
        iconImageOffset: [-20, -50],
      }
    );

    myMap3.geoObjects.add(myPlacemark3);

    updateAddressPosition(myMap3, myPlacemark3, addressDiv3);
  }

  function updateAddressPosition(myMap, myPlacemark, addressDiv) {
    function positionAddress() {
      if (myMap.projection) {
        var coords = myPlacemark.geometry.getCoordinates();
        var pixelCoords = myMap.projection.toGlobalPixels(
          coords,
          myMap.getZoom()
        );
        addressDiv.style.left = pixelCoords[0] + "px";
        addressDiv.style.top = pixelCoords[1] - 30 + "px";
      } else {
        console.log("myMap.projection не определен.");
      }
    }

    positionAddress();

    myPlacemark.events.add("drag", positionAddress);
    myPlacemark.events.add("dragend", positionAddress);
  }
});
