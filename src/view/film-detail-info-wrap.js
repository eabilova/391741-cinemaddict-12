import {createElement} from "../util.js";

const createFilmDetailInfoWrap = (card) => {
  const {src, ageLimit} = card;

  return (
    `<div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="./images/posters/${src}" alt="">

        <p class="film-details__age">${ageLimit}+</p>
      </div>
    </div>`
  );
};

export default class FilmDetailInfoWrap {
  constructor(card) {
    this._card = card;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetailInfoWrap(this._card);
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

