import {createElement} from "../util.js";

const createFilmDetailsGenre = (genres) => {
  return (
    `<span class="film-details__genre">${genres}</span>`
  );
};

export default class FilmDetailsGenre {
  constructor(genre) {
    this._genre = genre;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsGenre(this._genre);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
