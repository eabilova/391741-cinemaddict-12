import AbstractView from './abstract.js';

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

export default class FilmDetailInfoWrap extends AbstractView {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createFilmDetailInfoWrap(this._card);
  }
}

