// Simple mobile navigation toggle
const nav = document.querySelector('nav ul');
document.querySelector('.menu-toggle').addEventListener('click', () => {
    nav.classList.toggle('active');
});
