/* eslint-disable no-unused-vars */

import SmoothScroll from 'smooth-scroll/dist/smooth-scroll';

document.addEventListener(`DOMContentLoaded`, () => {
  const scroll = new SmoothScroll(`a[href*="#"]`, {
    speed: 1000,
    speedAsDuration: true
  });
});
