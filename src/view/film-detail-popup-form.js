import {createElement} from "../util.js";

const createFilmPopupForm = () => {
  return (
    `<form class="film-details__inner" action="" method="get">
    </form>`
  );
};

export default class FilmPopupForm {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmPopupForm();
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
