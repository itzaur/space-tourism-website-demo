'use strict';
// const btns = document.querySelectorAll('button');
// btns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     console.log(e.target.getAttribute('aria-selected'));
//     const attr = e.target.getAttribute('aria-selected');
//     if (attr === 'false') {
//       e.target.setAttribute('aria-selected', true);
//     } else {
//       e.target.setAttribute('aria-selected', false);
//     }
//   });
// });

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
