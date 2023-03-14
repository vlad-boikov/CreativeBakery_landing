'use strict';

const socialNetworkLogos
  = document.querySelectorAll('.social-networks__logo');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body_with-menu');
  } else {
    document.body.classList.remove('page__body_with-menu');
  }
});

socialNetworkLogos.forEach((logo, ind) => {
  if (ind !== socialNetworkLogos.length) {
    logo.addEventListener('blur', () => {
      socialNetworkLogos[ind + 1].focus();
    });
  }
});
