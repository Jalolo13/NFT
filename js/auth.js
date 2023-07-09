let swiperAll = document.querySelector(".swiper-all");
let swiperTop = document.querySelector(".swiper-top");
let swiperAllBtn = document.querySelector(".all-btn");
let swiperTopBtn = document.querySelector(".top-btn");

swiperAllBtn.addEventListener("click", () => {
    swiperAll.style.display = "flex";
    swiperAllBtn.classList.add("active");
    swiperTopBtn.classList.remove("active");
    swiperTop.style.display = "none";
});

swiperTopBtn.addEventListener("click", () => {
    swiperTop.style.display = "flex";
    swiperTopBtn.classList.add("active");
    swiperAllBtn.classList.remove("active");
    swiperAll.style.display = "none";
});
