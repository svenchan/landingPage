//mobile menu
const burgerIcon = document.getElementById("burger-menu");
const navbarMenu = document.getElementById("nav-links");

burgerIcon.addEventListener("click", (event) => {
    event.preventDefault();
    navbarMenu.classList.toggle("is-active");
});
