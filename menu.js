const lastWidth = document.querySelector('body').style.width;
/* eslint-disable func-names */
const closeMenu = function () {
  document.querySelector('.menu').classList.add('hidden');
  document.querySelector('body').style.width = lastWidth;
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('.Works').classList.remove('hidden');
};

const openMenu = function () {
  document.querySelector('.menu').classList.remove('hidden');
  document.querySelector('body').style.width = '10vmax';
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('.Works').classList.add('hidden');
};
// popup1
const openPopup1 = function () {
  document.querySelector('.popup-1').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('body').style.width = '20vmax';
};

const closePopup1 = function () {
  document.querySelector('.popup-1').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
};

// popup2

const openPopup2 = function () {
  document.querySelector('.popup-2').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('body').style.width = '20vmax';
};

const closePopup2 = function () {
  document.querySelector('.popup-2').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
};

// popup3

const openPopup3 = function () {
  document.querySelector('.popup-3').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('body').style.width = '20vmax';
};

const closePopup3 = function () {
  document.querySelector('.popup-3').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
};

// popup4

const openPopup4 = function () {
  document.querySelector('.popup-4').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('body').style.width = '20vmax';
};

const closePopup4 = function () {
  document.querySelector('.popup-4').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
};

// popup5

const openPopup5 = function () {
  document.querySelector('.popup-5').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('body').style.width = '20vmax';
};

const closePopup5 = function () {
  document.querySelector('.popup-5').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
};

// popup6

const openPopup6 = function () {
  document.querySelector('.popup-6').classList.remove('hidden');
  document.querySelector('.About-myself').classList.add('hidden');
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.headline').classList.add('hidden');
  document.querySelector('.Desktop-head').classList.add('hidden');
  document.querySelector('.geom').classList.add('hidden');
  document.querySelector('body').style.width = '20vmax';
};

const closePopup6 = function () {
  document.querySelector('.popup-6').classList.add('hidden');
  document.querySelector('.About-myself').classList.remove('hidden');
  document.querySelector('.form').classList.remove('hidden');
  document.querySelector('.headline').classList.remove('hidden');
  document.querySelector('.Desktop-head').classList.remove('hidden');
  document.querySelector('.geom').classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
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
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';
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
/* Validate-contact-form */
const email = document.getElementById('mail');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const userName = document.getElementById('name');
const message = document.getElementById('Message');

// preserve-form-data

const preserveData = function (userName, message, email) {
  let formId = {};
  if (localStorage.getItem('formId')) {
    formId = JSON.parse(localStorage.getItem('formId'));
  }
  formId.userNameId = userName.value;
  formId.emailId = email.value;
  formId.messageId = message.value;
  localStorage.setItem('formId', JSON.stringify(formId));
};

// Validate-contact-form function
const errorPresent = function (e) {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorElement.innerText = "Please enter the email with lower case letter's";
  } else {
    preserveData(userName, message, email);
  }
};

form.addEventListener('submit', errorPresent);
const formId = JSON.parse(localStorage.getItem('formId'));
if (document.getElementById('mail').value) {
  document.getElementById('mail').value = formId.emailId;
}
if (document.getElementById('name').value) {
  document.getElementById('name').value = formId.userNameId;
}
if (document.getElementById('Message').value) {
  document.getElementById('Message').value = formId.messageId;
}