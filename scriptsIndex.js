document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Opcional: Para cerrar el menú al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== menuBtn) {
            menu.classList.remove('show');
        }
    });
});