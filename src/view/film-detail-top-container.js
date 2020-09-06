import AbstractView from './abstract.js';

const createFilmPopupTopContainer = () => {
  return (
    `<div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
    </div>`
  );
};

export default class FilmPopupTopContainer extends AbstractView {
  constructor() {
    super();

    this._buttonClick = this._buttonClick.bind(this);
  }

  getTemplate() {
    return createFilmPopupTopContainer();
  }

  _buttonClick(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setButtonClick(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._buttonClick);
  }
}
