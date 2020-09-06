import AbstractView from './abstract.js';

const createFilmSection = () => {
  return (
    `<section class="films">
    </section>`
  );
};

export default class FilmSection extends AbstractView {
  getTemplate() {
    return createFilmSection();
  }
}

