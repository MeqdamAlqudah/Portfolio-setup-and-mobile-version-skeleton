/* eslint-disable func-names */
const lastWidth = document.querySelector('body').style.width;
const lastHeight = document.querySelector('body').style.height;
/* function of calls we will make */
const callsClose = function () {
  document.getElementsByClassName('About-myself')[0].classList.remove('hidden');// Show the about myself
  document.getElementsByClassName('form')[0].classList.remove('hidden');// Show the form section
  document.getElementsByClassName('headline')[0].classList.remove('hidden');// Show the headline
  document.getElementsByClassName('Desktop-head')[0].classList.remove('hidden');// Show the Desktop head img
  document.getElementsByClassName('geom')[0].classList.remove('hidden');// Show the about myself
  document.querySelector('body').style.width = lastWidth;// return the last width of the body
  document.querySelector('body').style.height = lastHeight;
};

const callsOpen = function () {
  document.getElementsByClassName('About-myself')[0].classList.add('hidden');// hide the about myself to controll the popup size as we want
  document.getElementsByClassName('form')[0].classList.add('hidden');// hide the form section to controll the popup size as we want
  document.getElementsByClassName('headline')[0].classList.add('hidden');// hide the headline to controll the popup size as we want
  document.getElementsByClassName('Desktop-head')[0].classList.add('hidden');// hide the Desktop head img to controll the popup size as we want
  document.getElementsByClassName('geom')[0].classList.add('hidden');// hide the geom img to controll the popup size as we want
  document.querySelector('body').style.width = '10vmax';// shrink the size of the body to controll the popup size as we want
  document.querySelector('body').style.height = '1vmax';
};
/* close and open the menu */
// in style.css you can find i pul the display property for the hidden class to none
const closeMenu = function () {
  document.getElementsByClassName('menu')[0].classList.add('hidden');// hide the menu
  document.querySelector('body').style.width = lastWidth;// return the width of the bodu
  document.getElementsByClassName('About-myself')[0].classList.remove('hidden');// return about-myself-section
  document.getElementsByClassName('form')[0].classList.remove('hidden');// retrun the form section
  document.getElementsByClassName('Desktop-head')[0].classList.remove('hidden');// retrun the desktop head
  document.getElementsByClassName('geom')[0].classList.remove('hidden');// return the geom image
  document.getElementsByClassName('Works')[0].classList.remove('hidden');// return the work section
};

const openMenu = function () {
  document.getElementsByClassName('menu')[0].classList.remove('hidden');// show the menu part by changing the display
  document.querySelector('body').style.width = '10vmax';// shrink the size of the body so we can control the size of the menu as we want
  document.getElementsByClassName('About-myself')[0].classList.add('hidden');// hide the about myself section to controll the menu as we want
  document.getElementsByClassName('form')[0].classList.add('hidden');// hide the form section to controll the menu as we want
  document.getElementsByClassName('Desktop-head')[0].classList.add('hidden');// hide the Desktophead to controll the menu as we want
  document.getElementsByClassName('geom')[0].classList.add('hidden');// hide the geom image to controll the menu as we want
  document.getElementsByClassName('Works')[0].classList.add('hidden');// hide the Works section to controll the menu as we want
};
// popup1
const openPopup1 = function () {
  document.getElementsByClassName('popup-1')[0].classList.remove('hidden');// Show popup-1
  callsOpen();
};

const closePopup1 = function () {
  document.getElementsByClassName('popup-1')[0].classList.add('hidden');
  callsClose();
};

// popup2

const openPopup2 = function () {
  document.getElementsByClassName('popup-2')[0].classList.remove('hidden');// Show popup-2
  callsOpen();
};

const closePopup2 = function () {
  document.getElementsByClassName('popup-2')[0].classList.add('hidden');
  callsClose();
};

// popup3

const openPopup3 = function () {
  document.getElementsByClassName('popup-3')[0].classList.remove('hidden');// Show popup-3
  callsOpen();
};

const closePopup3 = function () {
  document.getElementsByClassName('popup-3')[0].classList.add('hidden');
  callsClose();
};

// popup4

const openPopup4 = function () {
  document.getElementsByClassName('popup-4')[0].classList.remove('hidden');// Show popup-4
  callsOpen();
};

const closePopup4 = function () {
  document.getElementsByClassName('popup-4')[0].classList.add('hidden');
  callsClose();
};

// popup5

const openPopup5 = function () {
  document.getElementsByClassName('popup-5')[0].classList.remove('hidden');// Show popup-5
  callsOpen();
};

const closePopup5 = function () {
  document.getElementsByClassName('popup-5')[0].classList.add('hidden');
  callsClose();
};

// popup6

const openPopup6 = function () {
  document.getElementsByClassName('popup-6')[0].classList.remove('hidden');// Show popup-6
  callsOpen();
};

const closePopup6 = function () {
  document.getElementsByClassName('popup-6')[0].classList.add('hidden');
  callsClose();
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
document.getElementsByClassName('cancel')[0].addEventListener('click', closeMenu);
document.getElementsByClassName('menu-button-selector')[0].addEventListener('click', openMenu);
document.getElementsByClassName('Hello')[0].addEventListener('click', closeMenu);
document.getElementsByClassName('portfolio')[0].addEventListener('click', closeMenu);
document.getElementsByClassName('About')[0].addEventListener('click', closeMenu);
document.getElementsByClassName('contact')[0].addEventListener('click', closeMenu);
document.addEventListener('keydown', xButton);

// first

document.getElementById('See1').addEventListener('click', openPopup1);
document.getElementsByClassName('cancel-1')[0].addEventListener('click', closePopup1);
// second
document.getElementById('See2').addEventListener('click', openPopup2);
document.getElementById('SeeD2').addEventListener('click', openPopup2);
document.getElementsByClassName('cancel-2')[0].addEventListener('click', closePopup2);
// third
document.getElementById('See3').addEventListener('click', openPopup3);
document.getElementById('SeeD3').addEventListener('click', openPopup2);
document.getElementsByClassName('cancel-3')[0].addEventListener('click', closePopup3);
// fourth
document.getElementById('See4').addEventListener('click', openPopup4);
document.getElementById('SeeD4').addEventListener('click', openPopup2);
document.getElementsByClassName('cancel-4')[0].addEventListener('click', closePopup4);
// fifth
document.getElementById('See5').addEventListener('click', openPopup5);
document.getElementById('SeeD5').addEventListener('click', openPopup2);
document.getElementsByClassName('cancel-5')[0].addEventListener('click', closePopup5);
// six
document.getElementById('See6').addEventListener('click', openPopup6);
document.getElementById('SeeD6').addEventListener('click', openPopup2);
document.getElementsByClassName('cancel-6')[0].addEventListener('click', closePopup6);
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
// preserve the last entered in the form
form.addEventListener('submit', errorPresent);
const formId = JSON.parse(localStorage.getItem('formId'));
if (!document.getElementById('mail').value) {
  document.getElementById('mail').value = formId.emailId;
}
if (!document.getElementById('name').value) {
  document.getElementById('name').value = formId.userNameId;
}
if (!document.getElementById('Message').value) {
  document.getElementById('Message').value = formId.messageId;
}
