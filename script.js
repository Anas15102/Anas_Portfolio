// Add this to your script.js file

document.addEventListener('DOMContentLoaded', function() {
    // This code runs after the HTML page is fully loaded.
    
    // Initialize Feather Icons
    feather.replace();

    // Set Profile Card Background
    const cardBg = document.getElementById('profile-card-bg');
    // IMPORTANT: Make sure you have an image named "dp.jpeg" in your project folder.
    const imageUrl = 'dp.jpeg'; 
    cardBg.style.backgroundImage = `url(${imageUrl})`;
});