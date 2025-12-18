// Add smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Typing animation for roles
const roles = ["Machine Learning Engineer", "Data Analyst"];
const typingElement = document.querySelector('.typing');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (roleIndex >= roles.length) roleIndex = 0;

  const currentRole = roles[roleIndex];
  if (!deleting) {
    typingElement.textContent = currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500); // pause before deleting
      return;
    }
  } else {
    typingElement.textContent = currentRole.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex++;
    }
  }
  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

