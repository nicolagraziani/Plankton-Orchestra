const navbar = document.getElementsByClassName("navbar-toggler");
const navbarIcon = document.getElementsByClassName("bi-list");

navbar[0].addEventListener("click", () => {
    navbarIcon[0].classList.toggle("navbarOpen");
});