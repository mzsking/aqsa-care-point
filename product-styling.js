//products styling, product-card styling, hide/show button, view more/less button, etc.
const productSections = document.querySelectorAll(".products");

function visibleProducts() {

    if (window.innerWidth >= 1125) return 8;
    if (window.innerWidth >= 700) return 6;
    if (window.innerWidth >= 480) return 4;
return 4;
}

function setupProducts() {

    const visible = visibleProducts();

    productSections.forEach(section => {
        const cards = section.querySelectorAll(".product-card");
        const btn = section.querySelector(".view-more-btn");

        let currentVisible = visible;
        const loadCount =
            window.innerWidth >= 1124 ? 4 :
            window.innerWidth >= 700 ? 3 :
            2;
        const viewLessBtn = section.querySelector(".view-less-btn");

        cards.forEach((card, index) => {
            card.classList.toggle("hidden-product", index >= visible);
        });

        if (cards.length <= visible) {
            btn.style.display = "none";
            viewLessBtn.style.display = "none";
            return;
        }
        btn.style.display = "inline-block";
        viewLessBtn.style.display = "none";

        btn.style.display = "inline-block";
        btn.textContent = "View More";

        btn.onclick = () => {
            currentVisible += loadCount;
            cards.forEach((card, index) => {
                if (index < currentVisible) {
                    if (card.classList.contains("hidden-product")) {
                        card.classList.remove("hidden-product");
                        card.style.animation = "none";
                        void card.offsetWidth;
                        card.style.animation = "productFade .45s ease forwards";
                    }
                }
            });

            viewLessBtn.style.display = "inline-block";
            if (currentVisible >= cards.length) {
                btn.style.display = "none";
            }
        };

        viewLessBtn.onclick = () => {

            currentVisible = visible;
            cards.forEach((card, index) => {
                card.classList.toggle("hidden-product", index >= visible);

            });
            btn.style.display = "inline-block";
            viewLessBtn.style.display = "none";

            setTimeout(() => {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 200);

        };
    });
}

setupProducts();

window.addEventListener("resize", setupProducts);