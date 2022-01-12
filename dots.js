'use strict';
const dotsContainer = document.querySelector('[role="tablist"]');
const dots = dotsContainer.querySelectorAll('button');

let count = 0;
dotsContainer.addEventListener('keydown', function (e) {
  const KEY_DOWN_LEFT = 37;
  const KEY_DOWN_RIGHT = 39;

  if (e.keyCode === KEY_DOWN_LEFT || e.keyCode === KEY_DOWN_RIGHT) {
    if (e.keyCode === KEY_DOWN_RIGHT) {
      count++;

      if (count >= dots.length) {
        count = 0;
      }
    }

    if (e.keyCode === KEY_DOWN_LEFT) {
      count--;

      if (count < 0) {
        count = dots.length - 1;
      }
    }

    dots[count].focus();
  }
});

dotsContainer.addEventListener('click', function (e) {
  const clicked = e.target.getAttribute('aria-selected');

  dots.forEach(dot => dot.setAttribute('aria-selected', false));
  if (!clicked) return;
  if (clicked === 'false') {
    e.target.setAttribute('aria-selected', true);
  }

  const container = e.target.closest('.grid-container--crew');
  const containerImgs = container.querySelectorAll('picture');
  const articles = container.querySelectorAll('article');
  const imgEl = e.target.getAttribute('data-image');
  const articleEl = e.target.getAttribute('aria-controls');

  //   if (!container) return;
  console.log(container);
  containerImgs.forEach(img => img.setAttribute('hidden', true));
  articles.forEach(el => el.setAttribute('hidden', true));
  //   console.log(container.querySelector([`#${imgEl}`]));
  container.querySelector([`#${imgEl}`]).removeAttribute('hidden');
  container.querySelector([`#${articleEl}`]).removeAttribute('hidden');
});
