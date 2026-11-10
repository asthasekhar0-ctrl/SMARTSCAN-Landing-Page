

// Select the menu button
const menuBtn = document.getElementById("menuBtn");

// Select the navigation menu
const navMenu = document.getElementById("navMenu");

// Open and close menu on click
menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// Close menu after clicking a link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});
