let is404Displayed = false;
let seedInput = document.querySelector(".modal-block-input");
let registrationBtn = document.querySelector(".modal-btn-registration");
let btnReg = document.querySelector(".btn-registration");
let modal = document.querySelector(".modal-registration");
let modalClose = document.querySelector(".modal-block-close");
let modalBLock = document.querySelector(".modal-block");
let users = [
    {
        seed: "123456",
    },
    {
        seed: "654321",
    },
];

seedInput.oninput = function () {
    if (seedInput.value.length > 5) {
        registrationBtn.classList.add("active");
        document.querySelector(".modal-wallet").style.opacity = 1;
        registrationBtn.disabled = false;
    } else {
        document.querySelector(".modal-wallet").style.opacity = 0.4;
        registrationBtn.classList.remove("active");
        registrationBtn.disabled = true;
    }
};

const eventRegistration = () => {
    let seed = seedInput.value;
    let foundUser = users.find((el) => el.seed === seed);
    if (foundUser) {
        window.location.href = "auth.html";
    } else if (!is404Displayed) {
        let div = document.createElement("div");
        div.textContent = "Неправильные данные. Введите корректный сид";
        div.classList.add("modal-valid");
        modalBLock.appendChild(div);
        is404Displayed = true;
    }
};

modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-block")) {
        modal.style.opacity = 0;
        modal.style.zIndex = -1;
    }
});

modalClose.addEventListener("click", () => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
});
btnReg.addEventListener("click", () => {
    modal.style.opacity = 1;
    modal.style.zIndex = 10;
});
document.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        eventRegistration();
    }
});

registrationBtn.addEventListener("click", eventRegistration);
