let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuOverlay = document.querySelector(".menu-overlay");

menuBtn.addEventListener("click", function () {
    menuOverlay.style.zIndex = 30;
    menuOverlay.style.opacity = 1;
    menu.classList.add("active");
});

menuOverlay.addEventListener("click", () => {
    menu.classList.remove("active");
    menuOverlay.style.zIndex = -1;
    menuOverlay.style.opacity = 0;
});
