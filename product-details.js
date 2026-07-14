// gallery declarations 
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

let currentProduct = null;
let currentImage = 0;
//for swipe :
let productStartX = 0;
//for offer timer
let offerTimer = null;


//working mechanism
function renderProducts(category, sectionId) {
    const categoryProducts = products[category] || [];
    const grid = document.querySelector(`#${sectionId} .product-grid`);
    grid.innerHTML = "";
    let html = "";
    categoryProducts.forEach(product => {
        html += `

        <div class="product-card ${product.sold ? "sold-card" : ""}" ${product.sold ? "" : `data-product="${product.id}"`}>
        <span class="card-badge ${product.badge.toLowerCase().replace(" ", "-")}">${product.badge} </span>
            <img src="${product.cardImage}"
                 alt="${product.title}"
                 loading="lazy">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
           ${product.sold
                ? `<span class="sold-label">Sold Out</span>`
                : `<a href="#" class="btn view-product-btn" data-product="${product.id}">View Product</a>`
            }

        </div>
        `;

    });
    
    if (categoryProducts.length === 0) {
        grid.innerHTML = `
        <div class="empty-products">
            <i class="bi bi-phone"></i>
            <h3>No products available</h3>
            <p>Please check back later.</p>
        </div>
    `;
    } else {
        grid.innerHTML = html;
    }

    const viewMoreBtn = document.querySelector(`#${sectionId} .view-more-btn`);
    viewMoreBtn.style.display = categoryProducts.length === 0 ? "none" : "inline-block";
}

//function call
renderProducts("android", "android-products");
renderProducts("apple", "apple-products");
renderProducts("accessories", "accessories");

//function for offers
function updateOfferTimer(endDate) {

    clearInterval(offerTimer);

    function tick() {
        const now = new Date();
        const end = new Date(endDate);
        const diff = end - now;
        if (diff <= 0) {
            clearInterval(offerTimer);
            productOfferTimer.textContent = "Offer Ended";
            return;

        }

        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        productOfferTimer.textContent =
            `Ends in ${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    tick();

    offerTimer = setInterval(tick, 1000);

}


//Modal
function openProduct(productId) {
    let product = null;
    Object.values(products).forEach(category => {
        const found = category.find(item => item.id === productId);
        if (found) product = found;
    });

    if (!product) return;
    //view product analytics.
    trackEvent("view_product", {
    product_id: product.id,
    product_name: product.title
});

    if (product.sold) return;
    mainProductImg.src = "";
    thumbnailContainer.innerHTML = "";

    productTitle.textContent = product.title;
    productPrice.textContent = product.price;
    if (product.offer) {
        productOfferPrice.style.display = "block";
        productOfferTimer.style.display = "block";
        productOfferPrice.textContent = `Offer Price: ${product.offer.price}`;
        updateOfferTimer(product.offer.ends);
    } else {
        clearInterval(offerTimer);
        productOfferPrice.style.display = "none";
        productOfferTimer.style.display = "none";
    }

    productBadge.textContent = product.badge;

    productBadge.className = "product-badge";

    switch (product.badge.toLowerCase()) {

        case "new":
            productBadge.classList.add("new");
            break;

        case "pre-owned":
            productBadge.classList.add("pre-owned");
            break;

        case "refurbished":
            productBadge.classList.add("refurbished");
            break;

        case "sold":
            productBadge.classList.add("sold");
            break;

    }

    productSpecs.innerHTML = "";

    const specs = [
        product.storage,
        product.ram,
        product.battery,
        product.color,
        product.compatibility,
        product.warranty
    ];

    specs.forEach(spec => {

        if (!spec) return;

        const chip = document.createElement("span");
        chip.textContent = spec;

        productSpecs.appendChild(chip);

    });

    if (product.contents) {
        productContents.style.display = "block";
        productContents.innerHTML = `<strong>Contents:</strong> ${product.contents}`;
    } else {
        productContents.style.display = "none";
    }

    if (product.condition) {
        productCondition.style.display = "block";
        productCondition.innerHTML = `<strong>Condition:</strong> ${product.condition}`;

    } else {
        productCondition.style.display = "none";
    }

    productDescription.textContent = product.description;

    currentProduct = product;
    currentImage = 0;
    showImage(0);

    product.images.forEach((image, index) => {

        const thumb = document.createElement("img");

        thumb.src = image;
        thumb.loading = "lazy";
        thumb.alt = product.title;

        if (index === 0) {
            thumb.classList.add("active-thumb");
        }

        thumb.addEventListener("click", () => {

            showImage(index);

        });

        thumbnailContainer.appendChild(thumb);

    });

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";

}

//below product not inside 
function showImage(index) {

    currentImage = index;
    imageSkeleton.style.display = "block";
    mainProductImg.style.opacity = "0";
    mainProductImg.style.opacity = "0";
    mainProductImg.onload = null;

    mainProductImg.onload = () => {
        imageSkeleton.classList.add("hidden");
        mainProductImg.style.opacity = "1";
    };
    mainProductImg.src = "";
    mainProductImg.src = currentProduct.images[currentImage];

    document
        .querySelectorAll(".product-thumbnails img")
        .forEach((img, i) => {

            img.classList.toggle("active-thumb", i === currentImage);

        });

}

//touch start
mainProductImg.addEventListener("touchstart", e => {

    productStartX = e.touches[0].clientX;

});
//paste this immediately below touchstart:
mainProductImg.addEventListener("touchend", e => {

    const endX = e.changedTouches[0].clientX;

    const distance = productStartX - endX;

    if (Math.abs(distance) < 70) return;

    if (distance > 0) {

        galleryNext.click();

    } else {

        galleryPrev.click();

    }

});

//close product function
function closeProduct() {

    productModal.classList.remove("active");
    document.body.style.overflow = "";
    clearInterval(offerTimer);
    mainProductImg.src = "";
    thumbnailContainer.innerHTML = "";

}
//connecting every button
document.addEventListener("click", e => {
    const card = e.target.closest(".product-card");
    const btn = e.target.closest(".view-product-btn");
    if (!card && !btn) return;

    const productId = btn ? btn.dataset.product : card.dataset.product;
    if (!productId) return;
    e.preventDefault();
    openProduct(productId);

});

//close the modal
productClose.addEventListener("click", closeProduct);

productModal.addEventListener("click", e => {

    if (e.target === productModal) {
        closeProduct();
    }

});

//gallery logic
galleryNext.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= currentProduct.images.length) {
        currentImage = 0;
    }

    showImage(currentImage);

});

galleryPrev.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = currentProduct.images.length - 1;
    }

    showImage(currentImage);

});

//esc, left, right key- product details page
document.addEventListener("keydown", e => {

    if (!productModal.classList.contains("active")) return;

    switch (e.key) {

        case "Escape":
            closeProduct();
            break;

        case "ArrowRight":
            galleryNext.click();
            break;

        case "ArrowLeft":
            galleryPrev.click();
            break;

    }

});