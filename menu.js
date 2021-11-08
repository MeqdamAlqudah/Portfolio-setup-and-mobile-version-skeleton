const closeMenu = function () {
  document.querySelector('.menu').classList.add('hidden');
};

const openMenu = function () {
  document.querySelector('.menu').classList.remove('hidden');
};

document.querySelector('.cancel').addEventListener('click', closeMenu);
document.querySelector('.menu-button-selector').addEventListener('click', openMenu);
document.querySelector('.Hello').addEventListener('click', closeMenu);
document.querySelector('.portfolio').addEventListener('click', closeMenu);
document.querySelector('.About').addEventListener('click', closeMenu);
document.querySelector('.contact').addEventListener('click', closeMenu);
