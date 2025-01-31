document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuButton.classList.toggle('active');
    });
}); 