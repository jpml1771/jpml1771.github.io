const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

// Función para 'toggle' (alternar) la clase .show en los enlaces
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    // Opcional: Para accesibilidad (indica si el menú está expandido)
    const isExpanded = navLinks.classList.contains('show');
    hamburgerBtn.setAttribute('aria-expanded', isExpanded);
});

// Opcional: Cierra el menú al hacer clic en un enlace (útil en one-page)
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('show');
        hamburgerBtn.setAttribute('aria-expanded', false);
    }
});