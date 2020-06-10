/* eslint-disable no-unused-vars */
import MagicGrid from 'magic-grid';

document.addEventListener(`DOMContentLoaded`, () => {
  const magicGrid = new MagicGrid({
    container: '.list--projects',
    animate: true,
    gutter: 20,
    maxColumns: 2,
    static: true
  });

  magicGrid.listen();
});
