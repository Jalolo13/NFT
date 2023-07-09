let btnReg = document.querySelector(".btn-registration");
let modal = document.querySelector(".modal-registration");
let modalClose = document.querySelector(".modal-block-close");
let modalBLock = document.querySelector(".modal-block");
let is404Displayed = false;
let seedInput = document.querySelector(".modal-block-input");
let registrationBtn = document.querySelector(".modal-btn-registration");
let swiperAll = document.querySelector(".swiper-all");
let swiperTop = document.querySelector(".swiper-top");
let swiperAllBtn = document.querySelector(".all-btn");
let swiperTopBtn = document.querySelector(".top-btn");

let users = [
    {
        seed: "123456",
    },
    {
        seed: "654321",
    },
];

swiperAllBtn.addEventListener("click", () => {
    swiperAll.style.display = "flex";
    swiperAllBtn.classList.add("active");
    swiperTopBtn.classList.remove("active");
    swiperTop.style.display = "none";
    swiperAll.autoplay.start(); // Включение автовоспроизведения для swiperAll
    swiperTop.autoplay.stop(); // Остановка автовоспроизведения для swiperTop
});
swiperTopBtn.addEventListener("click", () => {
    swiperTop.style.display = "flex";
    swiperTopBtn.classList.add("active");
    swiperAllBtn.classList.remove("active");
    swiperAll.style.display = "none";
    swiperTop.autoplay.start(); // Включение автовоспроизведения для swiperTop
    swiperAll.autoplay.stop(); // Остановка автовоспроизведения для swiperAll
});

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

document.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        eventRegistration();
    }
});

btnReg.addEventListener("click", () => {
    modal.style.opacity = 1;
    modal.style.zIndex = 10;
});

modalClose.addEventListener("click", () => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
});

registrationBtn.addEventListener("click", eventRegistration);

document.querySelectorAll(".faq-accordeon-inner").forEach((el) => {
    el.addEventListener("click", () => {
        let content = el.nextElementSibling;
        let arrow = el.querySelector(".faq-accordeon-arrow");
        if (content.style.maxHeight) {
            document
                .querySelectorAll(".faq-accordeon-content")
                .forEach((el) => {
                    el.style.maxHeight = null;
                    el.style.paddingBottom = null;
                });
            document.querySelectorAll(".faq-accordeon-arrow").forEach((el) => {
                el.style.transform = "rotate(0)";
                el.style.opacity = 0.4;
            });
        } else {
            document
                .querySelectorAll(".faq-accordeon-content")
                .forEach((el) => {
                    el.style.maxHeight = null;
                    el.style.paddingBottom = null;
                });
            document.querySelectorAll(".faq-accordeon-arrow").forEach((el) => {
                el.style.transform = "rotate(0)";
                el.style.opacity = 0.4;
            });
            arrow.style.opacity = 1;
            arrow.style.transform = "rotate(180deg)";
            content.style.paddingBottom = "40px";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
