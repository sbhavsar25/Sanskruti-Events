// master.js — UI/UX Enhancements for Sanskruti Events

// Hamburger menu toggle for responsive navigation
function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

// Optional: Close menu when a link is clicked (on mobile)
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('navbar');
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });
});
