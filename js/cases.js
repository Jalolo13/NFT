let modal = document.querySelector(".modal-win");
let modalCloseBtn = document.querySelector(".modal-block-close-btn");
let btn = document.querySelector(".roulette-open");

console.log(modalCloseBtn);
btn.addEventListener("click", () => {
    modal.style.opacity = 1;
    modal.style.zIndex = 10;
});

modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-win-block")) {
        modal.style.opacity = 0;
        modal.style.zIndex = -1;
    }
});

modalCloseBtn.addEventListener("click", () => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
});
