const closeMenu = function () {
  document.querySelector('.menu').classList.add('hidden');
};

const openMenu = function () {
  document.querySelector('.menu').classList.remove('hidden');
};

const xButton = function (x) {
  if (x.keyCode === 88) {
    closeMenu();
  }
};

document.querySelector('.cancel').addEventListener('click', closeMenu);
document.querySelector('.menu-button-selector').addEventListener('click', openMenu);
document.querySelector('.Hello').addEventListener('click', closeMenu);
document.querySelector('.portfolio').addEventListener('click', closeMenu);
document.querySelector('.About').addEventListener('click', closeMenu);
document.querySelector('.contact').addEventListener('click', closeMenu);
document.addEventListener('keydown', xButton);
document.querySelector('.menu').style.width = screen.width;