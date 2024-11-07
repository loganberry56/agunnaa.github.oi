// Reference menu button and navigation menu
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility with sliding effect
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('menu-slide');
  navMenu.classList.toggle('hidden');
});

// Function to navigate to different pages
function navigateTo(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.add('hidden'));

  // Show the selected page
  document.getElementById(pageId).classList.remove('hidden');

  // Hide the navigation menu with slide effect
  navMenu.classList.add('hidden');
  navMenu.classList.remove('menu-slide');
}

// Intersection Observer for fading sections in and out
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scrolling for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});