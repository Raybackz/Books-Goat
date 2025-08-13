const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false, // disable looping so we can control arrows
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    575: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  on: {
    init: function () {
      updateArrowState(this);
    },
    slideChange: function () {
      updateArrowState(this);
    },
  },
});

function updateArrowState(swiper) {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Disable/enable left button
  if (swiper.isBeginning) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Disable/enable right button
  if (swiper.isEnd) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

new Swiper(".bookSwiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: ".newrelease-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    550: { slidesPerView: 2 },
    767: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }
});

new Swiper('.book-offer-slider', {
  loop: true,
  spaceBetween: 20,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.book-offer-pagination',
    clickable: true,
  },
});