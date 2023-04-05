"use strict";
const navClick = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navClick.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
