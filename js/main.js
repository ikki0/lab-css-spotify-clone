"use strict"

const btnMenu = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navbar");
const liElements = document.querySelector(".container-li");

btnMenu.addEventListener("click", function () {
    navbar.classList.toggle("navbar-responsive")
    liElements.classList.toggle("navbar-responsive");
})
