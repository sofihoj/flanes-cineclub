//Obtener del menú "Categorías" y su submenú
const categoriasMenu = document.querySelector('.menu-item');
//Evento de clic al elemento del menú "Categorías"
categoriasMenu.addEventListener('click', function () {
    // Alternar la clase "collapsed" en el elemento del menú "Categorías"
    categoriasMenu.classList.toggle('collapsed');
});
categoriasMenu.addEventListener('click', function () {
    // Alternar la clase "open" en el elemento del menú "Categorías"
    categoriasMenu.classList.toggle('open');
});