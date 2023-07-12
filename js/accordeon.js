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
