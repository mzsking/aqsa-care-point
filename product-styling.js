//products styling, product-card styling, hide/show button, view more/less button, etc.
const productSections = document.querySelectorAll(".products");

function visibleProducts() {

    if (window.innerWidth >= 1125) return 8;
    if (window.innerWidth >= 700) return 6;
    if (window.innerWidth >= 480) return 4;
    return 2;
}

function setupProducts() {

    const visible = visibleProducts();

    productSections.forEach(section => {

        const cards = section.querySelectorAll(".product-card");

        const btn = section.querySelector(".view-more-btn");

        let expanded = false;

        cards.forEach((card, index) => {

            card.classList.toggle("hidden-product", index >= visible);

        });

        if (cards.length <= visible) {

            btn.style.display = "none";

            return;

        }

        btn.style.display = "inline-block";

        btn.textContent = "View More";

        btn.onclick = () => {

            expanded = !expanded;

            cards.forEach((card, index) => {

                if (index < visible) return;

                if (expanded) {

                    setTimeout(() => {

                        card.classList.remove("hidden-product");
                        card.style.animation = "none";
                        void card.offsetWidth;
                        card.style.animation = `productFade .45s ease forwards`;

                    }, (index - visible) * 80);

                } else {

                    card.classList.add("hidden-product");

                }

            });

            btn.textContent = expanded ? "Show Less" : "View More";
            //auto-scroll-to-start
            if (!expanded) {

                cards.forEach((card, index) => {

                    if (index >= visible) {
                        card.classList.add("hidden-product");
                    }

                });

                setTimeout(() => {

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 250);

            }

        };

    });

}

setupProducts();

window.addEventListener("resize", setupProducts);