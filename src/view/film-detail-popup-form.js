import AbstractView from './abstract.js';

const createFilmPopupForm = () => {
  return (
    `<form class="film-details__inner" action="" method="get">
    </form>`
  );
};

export default class FilmPopupForm extends AbstractView {
  getTemplate() {
    return createFilmPopupForm();
  }
}
