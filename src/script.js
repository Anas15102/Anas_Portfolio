// Initialize Feather Icons
feather.replace();

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('glass-effect', 'shadow-lg');
    } else {
        header.classList.remove('glass-effect', 'shadow-lg');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Set Profile Card Background
document.addEventListener('DOMContentLoaded', function() {
    const cardBg = document.getElementById('profile-card-bg');
    // IMPORTANT: Make sure you have an image named "dp.jpeg" in your project folder.
    const imageUrl = '/images/dp.jpeg'; 
    cardBg.style.backgroundImage = `url(${imageUrl})`;
});
