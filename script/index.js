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
  var swiperContainer = document.querySelector(".mySwiper3");
  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: "auto",
      spaceBetween: 20,
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
    console.warn("Swiper контейнер не найден: .mySwiper3");
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
      var mapElement4 = document.getElementById("map4");

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

      if (mapElement4) {
        initMap4();
      } else {
        console.log(
          "Элемент с ID 'map4' не найден. Четвертая карта не будет инициализирована."
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
  }

  function initMap4() {
    var myMap4 = new ymaps.Map("map4", {
      center: [55.6305, 37.435],
      zoom: 13.5,
      controls: ["zoomControl", "typeSelector"],
    });

    var myPlacemark4_1 = new ymaps.Placemark(
      [55.624815, 37.441336],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "assest/image/shop/map-image.png",
        iconImageSize: [202, 50],
        iconImageOffset: [-20, -50],
      }
    );

    var myPlacemark4_2 = new ymaps.Placemark(
      [55.629975, 37.422889],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "assest/image/shop/map-image.png",
        iconImageSize: [202, 50],
        iconImageOffset: [-20, -50],
      }
    );

    myMap4.geoObjects.add(myPlacemark4_1);
    myMap4.geoObjects.add(myPlacemark4_2);
  }

  document.getElementById("openModal").onclick = function () {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
    } else {
      console.log("Модальное окно не найдено на странице");
    }
  };

  const closeButton = document.querySelector(".close-ceiling");
  if (closeButton) {
    closeButton.onclick = function () {
      const modal = document.getElementById("modal");
      if (modal) {
        modal.style.display = "none";
      }
    };
  } else {
    console.log("Кнопка закрытия не найдена");
  }

  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (modal && event.target === modal) {
      modal.style.display = "none";
    }
  };

  document.addEventListener("click", function (event) {
    let catalogButton = document.querySelector(".btn-catalog");
    let catalogMenu = document.querySelector(".catalog-menu");
    if (
      catalogMenu &&
      !catalogMenu.contains(event.target) &&
      !catalogButton.contains(event.target)
    ) {
      // Закрываем меню, если кликнули вне его
      catalogMenu.style.display = "none";
      catalogButton.classList.remove("btn-catalog_active");
      let openIcon = catalogButton.querySelector(".btn-catalog_svg.open");
      let closeIcon = catalogButton.querySelector(".btn-catalog_svg.close");
      openIcon.style.display = "flex";
      closeIcon.style.display = "none";
    }
  });
});
function toggleCatalog() {
  let button = document.querySelector(".btn-catalog");
  let menu = document.querySelector(".catalog-menu");
  let openIcon = button.querySelector(".btn-catalog_svg.open");
  let closeIcon = button.querySelector(".btn-catalog_svg.close");

  let isOpen = menu.style.display === "grid";

  if (isOpen) {
    menu.style.display = "none";
    button.classList.remove("btn-catalog_active");
    openIcon.style.display = "flex";
    closeIcon.style.display = "none";
  } else {
    menu.style.display = "grid";
    button.classList.add("btn-catalog_active");
    openIcon.style.display = "none";
    closeIcon.style.display = "flex";
  }
}

let activeSubMenu = null;
function toggleSubMenu(id, button) {
  let subMenu = document.getElementById(id);
  const isSmallScreen = window.matchMedia("(max-width: 48em)").matches;

  if (activeSubMenu && activeSubMenu !== subMenu) {
    activeSubMenu.style.display = "none";
    activeSubMenu.previousElementSibling.classList.remove(
      "category-btn_active"
    );
  }

  if (subMenu) {
    subMenu.style.display =
      subMenu.style.display === (isSmallScreen ? "grid" : "flex")
        ? "none"
        : isSmallScreen
        ? "grid"
        : "flex";

    if (subMenu.style.display === (isSmallScreen ? "grid" : "flex")) {
      button.classList.add("category-btn_active");
      activeSubMenu = subMenu;
    } else {
      button.classList.remove("category-btn_active");
      activeSubMenu = null;
    }
  }
}
let activeLinkButton = null; 
let activeLinksContainer = null; 

function toggleLinks(id, button) {
  let links = document.getElementById(id);
  
  if (links) {
    if (activeLinksContainer === links) {
      links.style.display = "none"; 
      button.classList.remove("sub-btn_arr-d_active"); 
      activeLinksContainer = null; 
      activeLinkButton = null; 
      return; 
    }

    if (activeLinksContainer) {
      activeLinksContainer.style.display = "none"; 
      activeLinkButton.classList.remove("sub-btn_arr-d_active"); 
    }

    links.style.display = "grid"; 
    button.classList.add("sub-btn_arr-d_active"); 
    
    activeLinksContainer = links; 
    activeLinkButton = button; 
  }
}



