import {createElement} from "../util.js";

const createFilmPopupSection = () => {
  return (
    `<section class="film-details">
    </section>`
  );
};

export default class FilmPopupSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmPopupSection();
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
