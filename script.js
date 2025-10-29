// Simple JavaScript for scroll animation or other effects (e.g., page interaction)
document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social-item');

    // Animation on page load
    socialLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = 1;
            link.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
