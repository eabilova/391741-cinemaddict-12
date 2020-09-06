import AbstractView from './abstract.js';
import {formatFilmDuration} from '../utils/common.js';

const createFilmCardTemplate = (card) => {
  const {title, rating, year, duration, genres, src, description, comments} = card;

  return (
    `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${formatFilmDuration(duration)}</span>
      <span class="film-card__genre">${genres[2]}</span>
    </p>
    <img src="./images/posters/${src}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">Comments: ${comments.length}</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`
  );
};

export default class FilmCardTemplate extends AbstractView {
  constructor(card) {
    super();
    this._card = card;

    this._filmElementMouseClick = this._filmElementMouseClick.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }

  _filmElementMouseClick(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setFilmElementMouseClick(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._filmElementMouseClick);
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._filmElementMouseClick);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._filmElementMouseClick);
  }
}

