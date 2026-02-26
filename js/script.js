const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const icon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

const testimonialSwiper = new Swiper(".gt-testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // যখন স্ক্রিন ৭৬৮ বা তার বেশি (ট্যাবলেটে ২টো স্লাইড)
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const blogSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 1.2 /* দুই পাশের স্লাইড হালকা দেখা যাবে ছবির মতো */,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // ট্যাবলেটে ২টো স্লাইড
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
    },
    // ল্যাপটপে ৩টে স্লাইড
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 40,
    },
  },
});

AOS.init({
  duration: 1200,
  easing: "ease-in-out",
  once: false,
  mirror: true,
  offset: 80,
});
