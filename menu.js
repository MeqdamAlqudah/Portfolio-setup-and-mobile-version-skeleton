const closeMenu = function () {
  document.querySelector('.menu').classList.add('hidden');
};

const openMenu = function () {
  document.querySelector('.menu').classList.remove('hidden');
};

// popup1
const openPopup1 = function () {
  document.querySelector('.popup-1').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
};

const closePopup1 = function () {
  document.querySelector('.popup-1').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
};

// popup2

const openPopup2 = function () {
  document.querySelector('.popup-2').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
};

const closePopup2 = function () {
  document.querySelector('.popup-2').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
};

// popup3

const openPopup3 = function () {
  document.querySelector('.popup-3').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
};

const closePopup3 = function () {
  document.querySelector('.popup-3').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
};

// popup4

const openPopup4 = function () {
  document.querySelector('.popup-4').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
};

const closePopup4 = function () {
  document.querySelector('.popup-4').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
};

// popup5

const openPopup5 = function () {
  document.querySelector('.popup-5').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
};

const closePopup5 = function () {
  document.querySelector('.popup-5').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
};

// popup6

const openPopup6 = function () {
  document.querySelector('.popup-6').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
};

const closePopup6 = function () {
  document.querySelector('.popup-6').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
};
const xButton = function (x) {
  if (x.keyCode === 88) {
    closeMenu();
    closePopup1();
    closePopup2();
    closePopup3();
    closePopup4();
    closePopup5();
    closePopup6();
  }
};
// menu
document.querySelector('.cancel').addEventListener('click', closeMenu);
document.querySelector('.menu-button-selector').addEventListener('click', openMenu);
document.querySelector('.Hello').addEventListener('click', closeMenu);
document.querySelector('.portfolio').addEventListener('click', closeMenu);
document.querySelector('.About').addEventListener('click', closeMenu);
document.querySelector('.contact').addEventListener('click', closeMenu);
document.addEventListener('keydown', xButton);

// first

document.querySelector('#See1').addEventListener('click', openPopup1);
document.querySelector('.cancel-1').addEventListener('click', closePopup1);
// second
document.querySelector('#See2').addEventListener('click', openPopup2);
document.querySelector('#SeeD2').addEventListener('click', openPopup2);
document.querySelector('.cancel-2').addEventListener('click', closePopup2);
// third
document.querySelector('#See3').addEventListener('click', openPopup3);
document.querySelector('#SeeD3').addEventListener('click', openPopup2);
document.querySelector('.cancel-3').addEventListener('click', closePopup3);
// fourth
document.querySelector('#See4').addEventListener('click', openPopup4);
document.querySelector('#SeeD4').addEventListener('click', openPopup2);
document.querySelector('.cancel-4').addEventListener('click', closePopup4);
// fifth
document.querySelector('#See5').addEventListener('click', openPopup5);
document.querySelector('#SeeD5').addEventListener('click', openPopup2);
document.querySelector('.cancel-5').addEventListener('click', closePopup5);
// six
document.querySelector('#See6').addEventListener('click', openPopup6);
document.querySelector('#SeeD6').addEventListener('click', openPopup2);
document.querySelector('.cancel-6').addEventListener('click', closePopup6);
// Storing the Data
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';
const storeObj = {
  1: {
    name: 'Project name goes here', description: text, featuredImg: ['img/Popup-menu/Mac-pop-2.png', 'img/Popup-menu/Mac-pop-3.png', 'img/Popup-menu/Mac-pop-4.png', 'img/Popup-menu/Mac-pop-5.png'], technologies: ['HTML/Css', 'Ruby on Rails', 'JavaScript'], live: '#', source: '#',
  },
  2: {
    name: 'Project name goes here', description: text, featuredImg: ['img/Popup-menu/Mac-pop-2.png', 'img/Popup-menu/Mac-pop-3.png', 'img/Popup-menu/Mac-pop-4.png', 'img/Popup-menu/Mac-pop-5.png'], technologies: ['HTML/Css', 'Ruby on Rails', 'JavaScript'], live: '#', source: '#',
  },
  3: {
    name: 'Project name goes here', description: text, featuredImg: ['img/Popup-menu/Mac-pop-2.png', 'img/Popup-menu/Mac-pop-3.png', 'img/Popup-menu/Mac-pop-4.png', 'img/Popup-menu/Mac-pop-5.png'], technologies: ['HTML/Css', 'Ruby on Rails', 'JavaScript'], live: '#', source: '#',
  },
  4: {
    name: 'Project name goes here', description: text, featuredImg: ['img/Popup-menu/Mac-pop-2.png', 'img/Popup-menu/Mac-pop-3.png', 'img/Popup-menu/Mac-pop-4.png', 'img/Popup-menu/Mac-pop-5.png'], technologies: ['HTML/Css', 'Ruby on Rails', 'JavaScript'], live: '#', source: '#',
  },
  5: {
    name: 'Project name goes here', description: text, featuredImg: ['img/Popup-menu/Mac-pop-2.png', 'img/Popup-menu/Mac-pop-3.png', 'img/Popup-menu/Mac-pop-4.png', 'img/Popup-menu/Mac-pop-5.png'], technologies: ['HTML/Css', 'Ruby on Rails', 'JavaScript'], live: '#', source: '#',
  },
  6: {
    name: 'Project name goes here', description: text, featuredImg: ['img/Popup-menu/Mac-pop-2.png', 'img/Popup-menu/Mac-pop-3.png', 'img/Popup-menu/Mac-pop-4.png', 'img/Popup-menu/Mac-pop-5.png'], technologies: ['HTML/Css', 'Ruby on Rails', 'JavaScript'], live: '#', source: '#',
  },
};
const objValues = Object.keys(storeObj);
for (let i = 0; i < objValues.length; i += 1) {
  document.querySelector(`.popup-${i + 1} p`).textContent = storeObj[i + 1].description;
  document.querySelector(`.popup-${i + 1} h5`).textContent = storeObj[i + 1].name;
  for (let j = 0; j < storeObj[i + 1].featuredImg.length; j += 1) {
    document.querySelector(`.popup-${i + 1} .pimg-${j + 1} img`).setAttribute('src', storeObj[i + 1].featuredImg[j]);
  }
  for (let j = 0; j < storeObj[i + 1].technologies.length; j += 1) {
    document.querySelector(`.popup-${i + 1} .first-buttons .tech${j + 1}`).textContent = storeObj[i + 1].technologies[j];
  }
  document.querySelector(`.popup-${i + 1} .live`).setAttribute('href', storeObj[i + 1].live);
  document.querySelector(`.popup-${i + 1} .source`).setAttribute('href', storeObj[i + 1].source);
}
