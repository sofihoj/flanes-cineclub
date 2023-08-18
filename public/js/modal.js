const open = document.getElementById('add-movie');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close-x');

open.addEventListener('click', () => {
    modal_container.classList.add('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})