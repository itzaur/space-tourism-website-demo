'use strict';

//ANCHOR Toggle functionality
const nav = document.querySelector('.primary-navigation');
const toggle = document.querySelector('.menu-toggle-btn');

toggle.addEventListener('click', e => {
  const clicked = e.target.getAttribute('aria-expanded');
  const visibility = nav.getAttribute('data-visible');

  clicked === 'false'
    ? e.target.setAttribute('aria-expanded', true)
    : e.target.setAttribute('aria-expanded', false);
  visibility === 'false'
    ? nav.setAttribute('data-visible', true)
    : nav.setAttribute('data-visible', false);
});
