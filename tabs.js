'use strict';
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', tabFocus);
tabList.addEventListener('click', changeItem);

let count = 0;
function tabFocus(e) {
  const KEY_DOWN_LEFT = 37;
  const KEY_DOWN_RIGHT = 39;

  if (e.keyCode === KEY_DOWN_LEFT || e.keyCode === KEY_DOWN_RIGHT) {
    tabs[count].setAttribute('tabindex', -1);

    if (e.keyCode === KEY_DOWN_LEFT) {
      count--;
      if (count < 0) {
        count = tabs.length - 1;
      }
    }

    if (e.keyCode === KEY_DOWN_RIGHT) {
      count++;
      if (count >= tabs.length) {
        count = 0;
      }
    }

    tabs[count].setAttribute('tabindex', 0);
    tabs[count].focus();
  }
}

function changeItem(e) {
  const parentEl = e.target.closest('.grid-container');
  const clicked = e.target.getAttribute('aria-controls');
  const clickedImg = e.target.getAttribute('data-image');
  const clickedTab = e.target.getAttribute('aria-selected');
  const span = e.target.parentNode.getAttribute('aria-selected');
  const clickedSpan = e.target.parentNode.getAttribute('aria-controls');
  const clickedSpanImg = e.target.parentNode.getAttribute('data-image');

  tabs.forEach(tab => tab.setAttribute('aria-selected', false));

  if (clickedTab === 'false') {
    e.target.setAttribute('aria-selected', true);
    // e.target.parentNode.setAttribute('aria-selected', true);
    hideContent(parentEl, 'article');
    showContent(parentEl, [`#${clicked}`]);
    hideContent(parentEl, 'picture');
    showContent(parentEl, [`#${clickedImg}`]);
  }

  if (span === 'false') {
    e.target.parentNode.setAttribute('aria-selected', true);
    hideContent(parentEl, 'article');
    showContent(parentEl, [`#${clickedSpan}`]);
    hideContent(parentEl, 'picture');
    showContent(parentEl, [`#${clickedSpanImg}`]);
  }

  console.log(clicked);
  console.log(clickedSpan);

  // if (!span) return;

  // if (clickedTab === 'false') {
  //   e.target.setAttribute('aria-selected', true);
  //   // e.target.parentNode.setAttribute('aria-selected', true);
  // }

  if (!clickedTab) return;
  // tabs.forEach(tab => tab.setAttribute('aria-selected', false));

  if (!clicked) return;

  // hideContent(parentEl, 'article');
  // showContent(parentEl, [`#${clicked}`]);
  // showContent(parentEl, [`#${clickedSpan}`]);

  // hideContent(parentEl, 'picture');
  // showContent(parentEl, [`#${clickedImg}`]);
  //   parentEl.querySelectorAll('article').forEach(item => {
  //     item.setAttribute('hidden', true);
  //   });
  //   parentEl.querySelectorAll('picture').forEach(img => {
  //     img.setAttribute('hidden', true);
  //   });
  //   parentEl.querySelector([`#${clicked}`]).removeAttribute('hidden');

  //   parentEl.querySelector([`#${clickedImg}`]).removeAttribute('hidden');
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach(item => {
    item.setAttribute('hidden', true);
  });
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute('hidden');
}
