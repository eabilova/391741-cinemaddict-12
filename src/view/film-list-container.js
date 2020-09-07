import AbstractView from './abstract.js';

const createFilmListContainer = () => {
  return (
    `<div class="films-list__container">
    </div>`
  );
};

export default class FilmListContainer extends AbstractView {
  getTemplate() {
    return createFilmListContainer();
  }
}
