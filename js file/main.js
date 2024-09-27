const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

console.log("Elements:", { nav, mobileNav, menuIcon, closeIcon, mobileMenuContainer });

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // or window.pageYOffset
    console.log("Scroll Position:", scrollPosition);

    if (scrollPosition > 60) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});

menuIcon.addEventListener("click", () => {
   
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    
    mobileMenuContainer.classList.remove("active");
});