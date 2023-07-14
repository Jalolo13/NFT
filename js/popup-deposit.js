let depPopup = document.querySelector(".deposit-popup");
let popupChange = document.querySelectorAll(".popup-change");

let depBtn = document.querySelector(".deposit-begin");
let depArrow = document.querySelector(".deposit-arrow");

let popupNumber = document.querySelector(".deposit-number");
let popupImgBtc = document.querySelector(".deposit-img-btc");

let depositBtn = document.querySelector(".deposit-btn");
let modalDeposit = document.querySelector(".modal-deposit");
let modalClose = document.querySelector(".modal-block-close");
let modalBtc = document.querySelector(".m-btc");
let modalEth = document.querySelector(".m-eth");
let modalUsdt = document.querySelector(".m-usdt");
let modalCopyBtn = document.querySelector(".modal-copy");

let modalSeed = document.querySelector(".modal-block-seed");
let modalSeedText = document.querySelector(
    ".modal-block-copy-seed"
).textContent;

let modalCopied = document.querySelector(".modal-block-copied");

let state = false;
let mockPop = [
    { id: 1, number: 0.07822601, image: "img/bitcoin.svg", title: "BTC" },
    { id: 2, number: 12.078226, image: "img/bitcoin-1.svg", title: "ETH" },
    { id: 3, number: 12.54242, image: "img/Group.svg", title: "USDT" },
];

depositBtn.addEventListener("click", () => {
    modalDeposit.style.opacity = 1;
    modalDeposit.style.zIndex = 10;
});

modalClose.addEventListener("click", () => {
    modalDeposit.style.opacity = 0;
    modalDeposit.style.zIndex = -1;
});

modalDeposit.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-block")) {
        modalDeposit.style.opacity = 0;
        modalDeposit.style.zIndex = -1;
    }
});

popupNumber.innerHTML = `<span>${mockPop[0].number}</span>`;
popupImgBtc.innerHTML = `<img src=${mockPop[0].image} alt="btc" />`;

function popup() {
    if (!state) {
        depPopup.classList.add("active");
        depArrow.classList.add("active");
        state = true;
    } else {
        depPopup.classList.remove("active");
        depArrow.classList.remove("active");
        state = false;
    }
}
mockPop.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("popup-change");
    div.innerHTML = `
                            <span class="popup-btc-number">${el.number}</span>
                            
                                <img src=${el.image} alt="btc" />
                                <span class="popup-btc-title">${el.title}</span>
                            
                        `;
    div.dataset.id = el.id;
    depPopup.append(div);
});

depPopup.addEventListener("click", (e) => {
    let id = Number(e.target.closest("div").dataset.id);

    let res = mockPop.find((el) => el.id === id);
    popupNumber.innerHTML = `<span>${res.number}</span>`;
    popupImgBtc.innerHTML = `<img src=${res.image} alt="btc" />`;
    popup();
});

depBtn.addEventListener("click", popup);

modalBtc.addEventListener("click", () => {
    modalBtc.classList.add("active");
    modalEth.classList.remove("active");
    modalUsdt.classList.remove("active");
});

modalEth.addEventListener("click", () => {
    modalEth.classList.add("active");
    modalBtc.classList.remove("active");
    modalUsdt.classList.remove("active");
});
modalUsdt.addEventListener("click", () => {
    modalUsdt.classList.add("active");
    modalEth.classList.remove("active");
    modalBtc.classList.remove("active");
});

modalCopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(modalSeedText);

    modalCopied.classList.add("active");
    setTimeout(() => {
        modalCopied.classList.remove("active");
    }, 2000);
});
