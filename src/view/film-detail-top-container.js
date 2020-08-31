import {createElement} from "../util.js";

const createFilmPopupTopContainer = () => {
  return (
    `<div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
    </div>`
  );
};

export default class FilmPopupTopContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmPopupTopContainer();
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
