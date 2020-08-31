import {createElement} from "../util.js";

const createFilmSection = () => {
  return (
    `<section class="films">
    </section>`
  );
};

export default class FilmSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmSection();
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

