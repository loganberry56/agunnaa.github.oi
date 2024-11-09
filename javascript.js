// Reference menu button, navigation menu, swap button, and footer
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');
const footer = document.getElementById('footer');
const swapButton = document.getElementById('swap-button'); // Reference the Swap button

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

  // Show footer only on the landing page
  if (pageId === 'landing-page') {
    footer.style.display = 'flex'; // Show footer
  } else {
    footer.style.display = 'none'; // Hide footer on other pages
  }

  // Hide the half-lengthy message on other pages
  const halfLengthyMessage = document.getElementById('half-lengthy-message');
  if (pageId === 'landing-page') {
    halfLengthyMessage.style.display = 'flex'; // Show on landing page
  } else {
    halfLengthyMessage.style.display = 'none'; // Hide on other pages
  }
}

// Function to check if the footer is in view and toggle Swap button visibility
function toggleSwapButtonVisibility() {
  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Check if the footer is in view
  if (footerRect.top <= viewportHeight) {
    swapButton.classList.add('hidden'); // Hide Swap button when footer is visible
  } else {
    swapButton.classList.remove('hidden'); // Show Swap button when footer is out of view
  }
}

// Redirect to the swap page when the Swap button is clicked
swapButton.addEventListener('click', () => {
  navigateTo('swap'); // Call navigateTo with the 'swap' pageId to display the swap page
});

// Listen for scroll events to toggle Swap button visibility
window.addEventListener('scroll', toggleSwapButtonVisibility);

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
