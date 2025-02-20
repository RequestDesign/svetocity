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
      navigation: {
        nextEl: "#swiper-btn_next-3",
        prevEl: "#swiper-btn_prev-3",
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
  var swiperContainer = document.querySelector(".mySwiper5");
  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper5", {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .mySwiper5");
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
  const products = [
    { name: "Ноутбук Asus" },
    { name: "Ноутбук Asus" },
    { name: "Ноутбук Asus" },
    { name: "Ноутбук Asus" },
    { name: "Смартфон Samsung" },
    { name: "Клавиатура Logitech" },
    { name: "Мышь Razer" }
];

const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");
const searchContainer = document.querySelector(".search");
const searchResultsBlock = document.querySelector(".search-results_block");
const searchButton = document.querySelector(".mobal-icon");

searchButton.addEventListener("click", function() {
  event.stopPropagation(); // Предотвращаем всплытие события
  if (window.innerWidth <= 768) {
      searchContainer.style.display = searchContainer.style.display === "none" || searchContainer.style.display === "" ? "flex" : "none";
  }
  searchResults.style.display = "none";
});

searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    searchResultsBlock.innerHTML = "";
    
    if (query) {
        searchResults.style.display = "block";
        const filtered = products.filter(product => product.name.toLowerCase().includes(query));
        
        if (filtered.length > 0) {
            filtered.forEach(product => {
                const div = document.createElement("div");
                div.classList.add("search-result-item");
                div.textContent = product.name;
                div.addEventListener("click", () => {
                    searchInput.value = product.name;
                    searchResults.style.display = "none";
                });
                searchResultsBlock.appendChild(div);
            });
        } else {
            searchResultsBlock.innerHTML = "<div class='search-result-item'>Ничего не найдено</div>";
        }
    } else {
        searchResults.style.display = "none";
    }
});

// Закрытие поиска при клике вне блока
document.addEventListener("click", function(event) {
    if (!searchContainer.contains(event.target) && !searchButton.contains(event.target)) {
        searchResults.style.display = "none";
        searchInput.value = "";
    }
});


  const fullCartBtn = document.getElementById("openFullCart");
  const fullCartPopup = document.getElementById("cartPopupFull");
  const closeFullCart = document.getElementById("closeFullCart");
  const fullCartOverlay = document.getElementById("cartOverlayFull");

  const emptyCartBtn = document.getElementById("openEmptyCart");
  const emptyCartPopup = document.getElementById("cartPopup");
  const closeEmptyCart = document.getElementById("closeEmptyCart");
  const emptyCartOverlay = document.getElementById("cartOverlayEmpty");
  function openPopup(btn, popup, overlay) {
    if (btn && popup && overlay) {
      btn.addEventListener("mouseenter", function () {
        popup.style.display = "grid";
        overlay.style.display = "block";
      });
      popup.addEventListener("mouseleave", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
      });
    } else {
      console.warn(
        "Один или несколько элементов для открытия попапа не найдены."
      );
    }
  }
  function closePopup(btn, popup, overlay) {
    if (btn && popup && overlay) {
      btn.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
      });
    } else {
      console.warn(
        "Один или несколько элементов для закрытия попапа не найдены."
      );
    }
  }
  openPopup(fullCartBtn, fullCartPopup, fullCartOverlay);
  openPopup(emptyCartBtn, emptyCartPopup, emptyCartOverlay);

  closePopup(closeFullCart, fullCartPopup, fullCartOverlay);
  closePopup(closeEmptyCart, emptyCartPopup, emptyCartOverlay);

  const minPrice = document.getElementById("min-price");
  const maxPrice = document.getElementById("max-price");
  const minPriceInput = document.getElementById("min-price-input");
  const maxPriceInput = document.getElementById("max-price-input");
  const progress = document.querySelector(".progress");
  const gap = 30;

  if (minPrice && maxPrice && minPriceInput && maxPriceInput && progress) {
    function updateSlider() {
      let minVal = parseInt(minPrice.value);
      let maxVal = parseInt(maxPrice.value);

      if (maxVal - minVal < gap) {
        if (event.target === minPrice) {
          minPrice.value = maxVal - gap;
        } else {
          maxPrice.value = minVal + gap;
        }
      }

      minPriceInput.value = minPrice.value;
      maxPriceInput.value = maxPrice.value;

      let percentMin = (minPrice.value / minPrice.max) * 100;
      let percentMax = (maxPrice.value / maxPrice.max) * 100;
      progress.style.left = percentMin + "%";
      progress.style.width = percentMax - percentMin + "%";
    }

    minPrice.addEventListener("input", updateSlider);
    maxPrice.addEventListener("input", updateSlider);
    minPriceInput.addEventListener("input", () => {
      minPrice.value = minPriceInput.value;
      updateSlider();
    });
    maxPriceInput.addEventListener("input", () => {
      maxPrice.value = maxPriceInput.value;
      updateSlider();
    });

    updateSlider();
  } else {
    console.warn("Один или несколько элементов не найдены на странице.");
  }

  const showFilterButton = document.querySelector(".filters-btn_visib");
  const showFilterText = document.querySelector(".filters-btn_visib-text");

  const filters = document.querySelector(".filters");

  if (showFilterButton) {
    showFilterButton.addEventListener("click", () => {
      if (filters.style.display === "grid") {
        filters.style.display = "none";
        showFilterText.textContent = "Показать фильтр";
      } else {
        filters.style.display = "grid";
        showFilterText.textContent = "Скрыть фильтр";
      }
    });
  }

  const showMoreButton = document.querySelector(".text-visib");
  const productBlock = document.querySelector(
    ".catalog-main-products__main-block"
  );
  if (showMoreButton && productBlock) {
    productBlock.classList.add("hidden");
    showMoreButton.addEventListener("click", () => {
      if (productBlock.classList.contains("hidden")) {
        productBlock.classList.remove("hidden");
        showMoreButton.textContent = "Скрыть";
      } else {
        productBlock.classList.add("hidden");
        showMoreButton.textContent = "Показать еще";
      }
    });
  } else {
    console.warn("Кнопка или блок с товарами не найдены на странице.");
  }

  document.querySelectorAll(".filter-title").forEach((title) => {
    if (title) {
      title.addEventListener("click", () => {
        const group = title.parentElement;
        const toggleIcon = title.querySelector(".toggle-filter");
        if (group && toggleIcon) {
          group.classList.toggle("open");
          toggleIcon.classList.toggle("toggle-filter_active");
        }
      });
    }
  });

  const sortToggles = document.querySelectorAll(".sort-toggle");
  const sortOptionsList = document.querySelectorAll(".sort-options");

  sortToggles.forEach((sortToggle, index) => {
    const sortOptions = sortOptionsList[index];
    const selectedSort = sortToggle.querySelector(".selected-sort");

    sortToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      if (
        sortOptions.style.display === "flex" ||
        sortOptions.style.display === "grid"
      ) {
        sortOptions.style.display = "none";
      } else {
        if (window.matchMedia("(max-width: 48em)").matches) {
          sortOptions.style.display = "grid";
        } else {
          sortOptions.style.display = "flex";
        }
      }
    });

    const sortRadios = sortOptions.querySelectorAll(".sort-option input");
    if (sortRadios.length > 0) {
      sortRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
          selectedSort.textContent = this.value;
          sortOptions.style.display = "none";
        });
      });
    } else {
      console.warn("Радиокнопки сортировки не найдены.");
    }
  });

  document.addEventListener("click", function (event) {
    sortOptionsList.forEach((sortOptions) => {
      if (
        (sortOptions.style.display === "flex" ||
          sortOptions.style.display === "grid") &&
        !sortOptions.contains(event.target) &&
        !event.target.classList.contains("sort-toggle")
      ) {
        sortOptions.style.display = "none";
      }
    });
  });

  const showMoreBtn = document.getElementById("showMoreBtn");
  const descriptionText = document.querySelector(
    ".description_content .txt-main-24-16"
  );
  if (showMoreBtn && descriptionText) {
    let isExpanded = false;
    showMoreBtn.addEventListener("click", function () {
      if (isExpanded) {
        descriptionText.classList.remove("expanded");
        showMoreBtn.textContent = "Показать еще";
      } else {
        descriptionText.classList.add("expanded");
        showMoreBtn.textContent = "Скрыть";
      }
      isExpanded = !isExpanded;
    });
  } else {
    console.warn(
      "Кнопка 'Показать еще' или текстовое описание не найдены на странице."
    );
  }

  const showMoreSpecsBtn = document.getElementById("showMoreSpecsBtn");
  const specificationsContent = document.querySelector(
    ".left-specifications_content"
  );
  if (showMoreSpecsBtn && specificationsContent) {
    let isSpecsExpanded = false;
    showMoreSpecsBtn.addEventListener("click", function () {
      if (isSpecsExpanded) {
        specificationsContent.classList.remove("expanded");
        showMoreSpecsBtn.textContent = "Показать еще";
      } else {
        specificationsContent.classList.add("expanded");
        showMoreSpecsBtn.textContent = "Скрыть";
      }
      isSpecsExpanded = !isSpecsExpanded;
    });
  } else {
    console.warn(
      "Кнопка 'Показать еще характеристики' или контент характеристик не найдены на странице."
    );
  }

  const bigImage = document.querySelector(".image-big");
  const smallImages = document.querySelectorAll(".image-little");

  smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", function () {
      bigImage.classList.add("fade-out");
      smallImage.classList.add("fade-out");

      setTimeout(() => {
        const tempSrc = bigImage.src;
        bigImage.src = smallImage.src;
        smallImage.src = tempSrc;
        bigImage.classList.remove("fade-out");
        smallImage.classList.remove("fade-out");
      }, 300);
    });
  });

  const ratingContainer = document.querySelector(".rating");

  if (ratingContainer) {
    console.log("Элемент .rating найден!");

    const stars = ratingContainer.querySelectorAll(".star");
    let selectedRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => {
        stars.forEach((s, i) => s.classList.toggle("hovered", i <= index));
      });

      star.addEventListener("mouseout", () => {
        stars.forEach((s) => s.classList.remove("hovered"));
      });

      star.addEventListener("click", () => {
        selectedRating = index + 1;
        stars.forEach((s, i) =>
          s.classList.toggle("selected", i < selectedRating)
        );
        console.log(`Вы выбрали ${selectedRating} звезд`);
      });
    });
  } else {
    console.log("Элемент .rating не найден.");
  }

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const selected = dropdown.querySelector(".dropdown-selected");
    const list = dropdown.querySelector(".dropdown-list");

    if (!selected || !list) {
      console.warn(
        "Ошибка: не найден .dropdown-selected или .dropdown-list в",
        dropdown
      );
      return;
    }
    selected.addEventListener("click", (event) => {
      event.stopPropagation();

      document.querySelectorAll(".dropdown").forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });
      dropdown.classList.toggle("open");
    });
    list.querySelectorAll("div").forEach((option) => {
      option.addEventListener("click", () => {
        selected.querySelector("span").textContent = option.textContent;
        dropdown.classList.remove("open");
      });
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  });

  document.querySelectorAll(".counter").forEach((counter) => {
    const countElement = counter.querySelector(".count");
    if (countElement) {
      let count = parseInt(countElement.textContent);

      counter.querySelector(".increase").addEventListener("click", function () {
        count++;
        countElement.textContent = count;
      });
      counter.querySelector(".decrease").addEventListener("click", function () {
        if (count > 1) {
          count--;
          countElement.textContent = count;
        } else {
          console.log("Счётчик не может быть меньше 1.");
        }
      });
    } else {
      console.log("Элемент счётчика не найден.");
    }
  });

  document.querySelectorAll(".order-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const orderItem = this.closest(".orders-content_item");
      const productsContainer = orderItem.querySelector(
        ".orders-content_item-block_tet"
      );
      const parentOrders = document.querySelector(".orders-content");

      if (productsContainer) {
        orderItem.classList.toggle("expanded");

        if (orderItem.classList.contains("expanded")) {
          productsContainer.style.maxHeight =
            productsContainer.scrollHeight + "px";
        } else {
          productsContainer.style.maxHeight = "4.1rem";
        }
      }

      let anyExpanded = document.querySelector(".orders-content_item.expanded");

      if (anyExpanded) {
        parentOrders.classList.add("expanded");
      } else {
        parentOrders.classList.remove("expanded");
      }
    });
  });

  let profileBlock = document.querySelector(".profile-item");
  if (profileBlock) {
    document.querySelectorAll(".edit-btn").forEach((button) => {
      button.addEventListener("click", function () {
        let input = this.previousElementSibling;
        input.readOnly = false;
        input.focus();
        document.getElementById("saveChangesBtn").style.display = "flex";
      });
    });

    document
      .getElementById("saveChangesBtn")
      .addEventListener("click", function () {
        document.querySelectorAll(".profile-item input").forEach((input) => {
          input.readOnly = true;
        });
        this.style.display = "none";
      });
    document.addEventListener("click", function (event) {
      let isInsideProfile = event.target.closest(".profile-item");
      let isSaveButton = event.target.closest("#saveChangesBtn");

      if (!isInsideProfile && !isSaveButton) {
        document.querySelectorAll(".profile-item input").forEach((input) => {
          input.readOnly = true;
        });
      }
    });
  }

  const btnSpecifications = document.getElementById("btn-specifications");
  const btnDescription = document.getElementById("btn-description");
  const btnReviews = document.getElementById("btn-reviews");
  const specificationsBlock = document.getElementById("specifications");
  const descriptionBlock = document.getElementById("description");
  const reviewsBlock = document.getElementById("reviews");

  if (
    btnSpecifications &&
    btnDescription &&
    btnReviews &&
    specificationsBlock &&
    descriptionBlock &&
    reviewsBlock
  ) {
    btnSpecifications.addEventListener("click", function () {
      toggleContent("specifications");
      setActiveButton(btnSpecifications, btnDescription, btnReviews);
    });
    btnDescription.addEventListener("click", function () {
      toggleContent("description");
      setActiveButton(btnDescription, btnSpecifications, btnReviews);
    });
    btnReviews.addEventListener("click", function () {
      toggleContent("reviews");
      setActiveButton(btnReviews, btnSpecifications, btnDescription);
    });
  }

  function toggleContent(contentType) {
    specificationsBlock.style.display = "none";
    descriptionBlock.style.display = "none";
    reviewsBlock.style.display = "none";
    document.getElementById(contentType).style.display = "grid";
  }

  function setActiveButton(activeButton, ...inactiveButtons) {
    inactiveButtons.forEach((button) =>
      button.classList.remove("btn-specif_active")
    );
    activeButton.classList.add("btn-specif_active");
  }

  const designModal = document.getElementById("designModal");
  const authModal = document.getElementById("authModal");
  const reviewModal = document.getElementById("reviewModal");
  const openDesignModalBtn = document.getElementById("openDesignModal");
  const openAuthModalBtn = document.getElementById("openAuthModal");
  const openReviewModalBtn = document.getElementById("openReviewModal");
  const closeDesignModalBtn = document.getElementById("closeDesignModal");
  const closeAuthModalBtn = document.getElementById("closeAuthModal");
  const closeReviewModalBtn = document.getElementById("closeReviewModal");

  function openModal(modal) {
    if (modal) {
      modal.style.display = "flex";
    }
  }
  function closeModal(modal) {
    if (modal) {
      modal.style.display = "none";
    }
  }
  if (openDesignModalBtn) {
    openDesignModalBtn.addEventListener("click", function () {
      openModal(designModal);
    });
  }
  if (openAuthModalBtn) {
    openAuthModalBtn.addEventListener("click", function () {
      openModal(authModal);
    });
  }
  if (openReviewModalBtn) {
    openReviewModalBtn.addEventListener("click", function () {
      openModal(reviewModal);
    });
  }
  if (closeDesignModalBtn) {
    closeDesignModalBtn.addEventListener("click", function () {
      closeModal(designModal);
    });
  }
  if (closeAuthModalBtn) {
    closeAuthModalBtn.addEventListener("click", function () {
      closeModal(authModal);
    });
  }
  if (closeReviewModalBtn) {
    closeReviewModalBtn.addEventListener("click", function () {
      closeModal(reviewModal);
    });
  }

  window.addEventListener("click", function (event) {
    if (designModal && event.target === designModal) {
      closeModal(designModal);
    }
    if (authModal && event.target === authModal) {
      closeModal(authModal);
    }
    if (reviewModal && event.target === reviewModal) {
      closeModal(reviewModal);
    }
  });

  document.addEventListener("click", function (event) {
    let catalogButton = document.querySelector(".btn-catalog");
    let catalogMenu = document.querySelector(".catalog-menu");
    if (
      catalogMenu &&
      !catalogMenu.contains(event.target) &&
      !catalogButton.contains(event.target)
    ) {
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

function togglePassword(event) {
  const button = event.currentTarget;
  const passwordInput = button.previousElementSibling;
  const eyeIcon = button.querySelector("svg");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.8318 14.7617C6.37558 18.295 9.90088 20.7617 14 20.7617C18.0991 20.7617 21.6244 18.295 23.1682 14.7618C21.6244 11.2285 18.0991 8.76172 14 8.76172C9.90087 8.76172 6.37561 11.2284 4.8318 14.7617ZM24.2501 14.7618C22.65 10.6644 18.664 7.76172 14 7.76172C9.33603 7.76172 5.35004 10.6643 3.74988 14.7616C5.35 18.859 9.33603 21.7617 14 21.7617C18.664 21.7617 22.65 18.8591 24.2501 14.7618Z" fill="#8E8E93" />
                      <path  fill-rule="evenodd"  clip-rule="evenodd"  d="M14 17.7617C15.6569 17.7617 17 16.4186 17 14.7617C17 13.1049 15.6569 11.7617 14 11.7617C12.3431 11.7617 11 13.1049 11 14.7617C11 16.4186 12.3431 17.7617 14 17.7617ZM14 18.7617C16.2091 18.7617 18 16.9709 18 14.7617C18 12.5526 16.2091 10.7617 14 10.7617C11.7909 10.7617 10 12.5526 10 14.7617C10 16.9709 11.7909 18.7617 14 18.7617Z"  fill="#8E8E93"/>`;
  } else {
    passwordInput.type = "password";
    eyeIcon.innerHTML = `<path d="M5.46094 12C5.46094 12 8.69168 15.9037 14.2301 15.7894C19.7685 15.6751 22.5377 12 22.5377 12" stroke="#8E8E93" stroke-linecap="round"/>
                      <path  fill-rule="evenodd"  clip-rule="evenodd"  d="M5.07022 17.2512L7.37789 13.8828L8.16065 14.3291L5.85298 17.6975C5.71788 17.8947 5.43314 17.9547 5.21698 17.8314C5.00083 17.7082 4.93512 17.4484 5.07022 17.2512Z"  fill="#8E8E93" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9298 17.2512L20.6221 13.8828L19.8393 14.3291L22.147 17.6975C22.2821 17.8947 22.5669 17.9547 22.783 17.8314C22.9992 17.7082 23.0649 17.4484 22.9298 17.2512Z" fill="#8E8E93"/>`;
  }
}

document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", togglePassword);
});
