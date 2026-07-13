//dark mode
const themeButtons = document.querySelectorAll(".theme-toggle");
const themeIcons = document.querySelectorAll(".theme-toggle i");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
}
updateThemeIcon();
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const darkMode =
            document.documentElement.getAttribute("data-theme") === "dark";
        if (darkMode) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");

        }
        updateThemeIcon();
    });

});

function updateThemeIcon() {
    const darkMode =
        document.documentElement.getAttribute("data-theme") === "dark";

    themeIcons.forEach(icon => {
        icon.className = darkMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
    });

}

//hero
history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const heroContent = document.querySelector(".hero-content");
const heading = document.querySelector(".hero-content h1");
const paragraph = document.querySelector(".hero-content p");
const button = document.querySelector(".btn");
const images = document.querySelectorAll(".hero-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelector(".dots");

//slides array
const slides = [

    {
        title: "New & Pre-Owned Smartphones",
        text: "Quality smartphones at honest prices with bill (warranty on selected devices).",
        button: "View Android",
        link: "#android-products"
    },
    {
        title: "Premium iPhones",
        text: "Find new and pre-owned iPhones at great prices.",
        button: "View iPhones",
        link: "#apple-products"
    },
    {
        title: "Accessories & Mobile Essentials",
        text: "Chargers, cables, cases, tempered glass, power banks and more for your everyday mobile needs.",
        button: "Shop Accessories",
        link: "#accessories"
    },
    {
        title: "Mobile Repair Services",
        text: "Display, battery, charging port and motherboard repairs by experienced technicians.",
        button: "Our Services",
        link: "#services"

    }
];


let current = 0;
let timer;
let isAnimating = false;
let startX = 0;
let endX = 0;

//slide dots
images.forEach((img, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";

    if (index === 0) dot.classList.add("active-dot");
    dot.onclick = () => goToSlide(index);
    dots.appendChild(dot);

});

const dotElements = document.querySelectorAll(".dot");

function updateText() {
    heroContent.classList.remove("animate");
    heading.textContent = slides[current].title;
    paragraph.textContent = slides[current].text;
    button.textContent = slides[current].button;
    button.href = slides[current].link;

    void heroContent.offsetWidth;

    heroContent.classList.add("animate");

}

function updateDots() {

    dotElements.forEach(dot => dot.classList.remove("active-dot"));

    dotElements[current].classList.add("active-dot");

}

function goToSlide(index) {
    if (isAnimating || index === current) return;

    isAnimating = true;

    images[current].classList.remove("active");
    images[index].classList.add("active");

    setTimeout(() => {

        current = index;
        updateText();
        updateDots();

        isAnimating = false;

    }, 180);

    resetTimer();

}

function nextSlide() {

    let next = current + 1;
    if (next >= slides.length) next = 0;
    goToSlide(next);

}

function prevSlide() {
    let prev = current - 1;
    if (prev < 0) prev = slides.length - 1;
    goToSlide(prev);

}

nextBtn.onclick = nextSlide;

prevBtn.onclick = prevSlide;

function resetTimer() {

    clearInterval(timer);

    timer = setInterval(nextSlide, 10000);

}

updateText();

resetTimer();


//menu-button
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".mobile-menu a");

function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.style.display = "";
    document.body.style.overflow = "";

}

//menu btn
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    menuBtn.style.display = "none";
    document.body.style.overflow = "hidden";

});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
const hero = document.querySelector(".hero");
hero.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

hero.addEventListener("touchend", e => {

    endX = e.changedTouches[0].clientX;

    const distance = startX - endX;

    if (Math.abs(distance) < 70) return;

    if (distance > 0) {
        nextSlide();   // Swipe left
    } else {
        prevSlide();   // Swipe right
    }

});



//dropdown
const categories = document.querySelector(".categories");
const categoriesBtn = document.querySelector(".categories-btn");
const dropdown = categories.querySelector(".dropdown");

categoriesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("open");
    categoriesBtn.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!categories.contains(e.target)) {
        dropdown.classList.remove("open");
        categoriesBtn.classList.remove("open");
    }
});
dropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        dropdown.classList.remove("open");
        categoriesBtn.classList.remove("open");
    });
});