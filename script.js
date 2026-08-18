// Grab references to the elements we need
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle the mobile menu open/closed when button is clicked
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after clicking a link
    navMenu.classList.remove('open');
  });
});