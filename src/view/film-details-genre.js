import AbstractView from './abstract.js';

const createFilmDetailsGenre = (genres) => {
  return (
    `<span class="film-details__genre">${genres}</span>`
  );
};

export default class FilmDetailsGenre extends AbstractView {
  constructor(genre) {
    super();
    this._genre = genre;
  }

  getTemplate() {
    return createFilmDetailsGenre(this._genre);
  }
}
