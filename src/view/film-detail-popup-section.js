import AbstractView from './abstract.js';

const createFilmPopupSection = () => {
  return (
    `<section class="film-details">
    </section>`
  );
};

export default class FilmPopupSection extends AbstractView {
  getTemplate() {
    return createFilmPopupSection();
  }
}
