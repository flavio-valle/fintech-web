const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');
const navbar = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
    menuContent.classList.toggle('hidden');
});
