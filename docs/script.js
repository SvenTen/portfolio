"use strict";

/* Calculate mouse position inside image-container */
document
  .querySelector(".image-container")
  .addEventListener("mousemove", function (e) {
    const container = document.querySelector(".image-container");

    const containerRect = container.getBoundingClientRect();

    const x = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    const y = ((e.clientY - containerRect.top) / containerRect.height) * 100;

    document.documentElement.style.setProperty("--x", `${x}%`);
    document.documentElement.style.setProperty("--y", `${y}%`);
  });

/* Dropdown menu, first section checks if the click is happening inside dropdown menu or button, if so ignore the click */
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  /* Toggles the active class on the dropdown */
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }
  /* Toggles off the active class from the dropdown unless the click happens on the same dropdown menu you are in */
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

/* dark mode */
const darkButton = document.querySelector(".color-mode");
const bgDark = document.querySelector(".background-dark");
const aboutMe = document.querySelector(".about-me");
const projects = document.querySelector(".projects");
const projectsH2 = document.querySelector(".projects-h2");
const footerH2 = document.querySelector(".footerH2");
const headingTool = document.querySelector(".heading-tool");
const credentials = document.querySelector(".credentials");
const footerEmail = document.querySelector(".footer-email-form");
const footer = document.querySelector(".footer");
const form = document.querySelectorAll(".forminput");
const aboutMeText = document.querySelectorAll(".about-me-text");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const dropLink = document.querySelectorAll(".droplink");
const tool = document.querySelectorAll(".tool");
const mediaBackground = document.querySelector(".section-hero");
const heroBackground = document.querySelector(".hero");
const heading1 = document.querySelector(".heading-primary");
const subheading = document.querySelector(".sub-heading");

// BG = #222
// Color = #f9f9f9
const applyDark = (x) => {
  x.classList.toggle("dark");
};

// BG = #444
// Color = #f9f9f9
const applyGray = (x) => {
  x.classList.toggle("gray");
};

// BG = #111
// Color = #f9f9f9
const applyDarkest = (x) => {
  x.classList.toggle("darkest");
};

darkButton.addEventListener("click", (e) => {
  applyDark(aboutMe);
  applyDark(projects);
  applyDark(projectsH2);
  applyDark(headingTool);
  applyGray(credentials);
  applyDarkest(footer);
  applyDark(footerH2);
  applyDark(footerEmail);
  applyDark(heading1);
  applyDark(subheading);

  form.forEach(function (e) {
    applyDark(e);
  });

  aboutMeText.forEach(function (e) {
    applyDark(e);
  });

  dropdownMenu.forEach(function (e) {
    applyDark(e);
  });

  dropLink.forEach(function (e) {
    applyDark(e);
  });

  tool.forEach(function (e) {
    applyDarkest(e);
  });

  heroBackground.classList.toggle("dark-bg--hero");
  mediaBackground.classList.toggle("dark-bg--herosection");

  document.body.classList.toggle("gray");
});
