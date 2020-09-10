import AbstractView from './abstract.js';

const createFilmDetailControls = () => {
  return (
    `<section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>`
  );
};

export default class FilmDetailControls extends AbstractView {
  constructor(card) {
    super();
    this._card = card;

    this._elementClickHandler = this._elementClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmDetailControls();
  }

  _elementClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setControlClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._elementClickHandler);
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._elementClickHandler);
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._elementClickHandler);
  }
}

