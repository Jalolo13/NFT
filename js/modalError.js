let modal = document.querySelector(".modal-error");
let modalBtn = document.querySelectorAll(".inventory-card-btn");
let close = document.querySelector(".modal-block-close");

modalBtn.forEach((e) => {
    e.addEventListener("click", () => {
        modal.style.opacity = 1;
        modal.style.zIndex = 10;
    });
});

close.addEventListener("click", () => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
});

console.log(modal);

modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-block")) {
        modal.style.opacity = 0;
        modal.style.zIndex = -1;
    }
});
