//model elements
const productModal = document.querySelector(".product-modal");
const productClose = document.querySelector(".product-close");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".product-price");
const productOfferPrice = document.querySelector(".product-offer-price");
const productOfferTimer = document.querySelector(".product-offer-timer");
const productBadge = document.querySelector(".product-badge");
const productSpecs = document.querySelector(".product-specs");
const productDescription = document.querySelector(".product-description");
const productContents = document.querySelector(".product-contents");
const productCondition = document.querySelector(".product-condition");
const mainProductImg = document.querySelector(".main-product-img");
const imageSkeleton = document.querySelector(".image-skeleton");
const thumbnailContainer = document.querySelector(".product-thumbnails");

// badge: "Sold",
// sold: true,
// Products available for sale can either:
// - Set sold: false, or
// - Omit the sold property entirely (undefined is treated as false).
// IMPORTANT:
// If badge is "Sold", always set sold: true.
// The sold flag controls the product behavior, not the badge text.
// This is more reliable than checking the badge value.

//products listing:
const products = {

    android: [

        {
            id: "android001",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android002",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android003",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android004",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android005",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android006",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android007",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android008",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android009",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android010",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android011",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
        {
            id: "android012",
            badge: "New",
            title: "Samsung Galaxy S24",
            price: "₹54,999",
            offer: {
                price: "₹49,999",
                ends: "2026-08-20T23:59:59"
            },
            cardImage: "android-grid.webp",
            storage: "256GB",
            ram: "8GB",
            color: "Black",
            warranty: "3 Months warranty",
            contents: "Phone, Box, Original Charger, Bill",
            condition: "Excellent condition",
            description: "Premium Samsung flagship with excellent cameras and smooth performance.",
            images: [
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp",
                "android-show.webp"
            ]
        },
    ],

    apple: [

        {
            id: "iphone001",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },

        {
            id: "iphone002",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },

        {
            id: "iphone003",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone004",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone005",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone006",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone007",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone008",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone009",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone010",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone011",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
        {
            id: "iphone012",
            badge: "Pre-Owned",
            title: "iPhone 11",
            price: "₹28,999",
            cardImage: "iphone-grid.webp",
            storage: "128GB",
            battery: "89% Battery Health",
            color: "Black",
            warranty: "1 Month warranty",
            contents: "Phone, Box, Bill",
            condition: "Very Good",
            description: "Well maintained iPhone with verified battery health.",
            images: [
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp",
                "iphone-show.webp"
            ]
        },
    ],
    accessories: [
        {
            id: "accessory001",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory002",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory003",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory004",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory005",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory006",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory007",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory008",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory009",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory010",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory011",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
        {
            id: "accessory012",
            badge: "Sold",
            sold: true,
            title: "AirPods 2 Pro",
            price: "₹799",
            cardImage: "accessories-grid.webp",
            compatibility: "Compatible with Android & iPhone",
            warranty: "6 Months warranty",
            description: "High-quality wireless earbuds.",
            images: [
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp",
                "accessories-show.webp"
            ]
        },
    ]
};