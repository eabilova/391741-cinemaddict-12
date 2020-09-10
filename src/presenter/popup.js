import {render, RenderPosition} from '../utils/render.js';
import FilmPopupSection from '../view/film-detail-popup-section.js';
import FilmPopupForm from '../view/film-detail-popup-form.js';
import FilmPopupTopContainer from '../view/film-detail-top-container.js';
import FilmDetailInfoWrap from '../view/film-detail-info-wrap.js';
import FilmDetailControls from '../view/film-detail-controls.js';
import FilmDetailInfo from '../view/film-detail-info.js';
import FilmPopupBottomContainer from '../view/film-detail-bottom-container.js';
import Comment from '../view/film-detail-comment.js';
import FilmDetailsGenre from '../view/film-details-genre.js';

export default class Popup {
  constructor(container) {
    this._container = container;
    this._popupSection = new FilmPopupSection();
    this._filmControls = new FilmDetailControls();
  }

  init(film) {
    this._film = film;
    this._renderPopup(this._film);
  }

  _createPopupCard(film) {
    // Popup
    this._popupForm = new FilmPopupForm();
    render(this._popupSection, this._popupForm, RenderPosition.AFTERBEGIN);

    this._popupTopContainer = new FilmPopupTopContainer();
    render(this._popupForm, this._popupTopContainer, RenderPosition.AFTERBEGIN);

    this._popupInfoWrap = new FilmDetailInfoWrap(film);
    render(this._popupTopContainer, this._popupInfoWrap, RenderPosition.BEFOREEND);
    render(this._popupTopContainer, this._filmControls, RenderPosition.BEFOREEND);
    this._filmControls.setControlClickHandler(() => {
      this._filmControls.classList.add(`film-card__controls-item--active`);
    });

    render(this._popupInfoWrap, new FilmDetailInfo(film), RenderPosition.BEFOREEND);

    const genreList = this._popupInfoWrap.getElement().querySelector(`.film-details__row:last-of-type`);
    const genreContainer = genreList.querySelector(`.film-details__cell`);
    const {genres} = film;
    genres.forEach((genre) => render(genreContainer, new FilmDetailsGenre(genre), RenderPosition.BEFOREEND));


    // Popup Comment List
    render(this._popupForm, new FilmPopupBottomContainer(film), RenderPosition.BEFOREEND);
    const popupBottomContainer = this._popupForm.getElement().querySelector(`.form-details__bottom-container`);
    const popupcommentContainer = popupBottomContainer.querySelector(`.film-details__comments-list`);

    const {comments} = film;
    comments.forEach((comment) => render(popupcommentContainer, new Comment(comment.message, comment.author, comment.date), RenderPosition.BEFOREEND));


    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._closePopup(this._popupSection.getElement(), onEscKeyDown);
      }
    };

    this._popupTopContainer.setButtonClick(() => {
      this._closePopup(this._popupSection.getElement(), onEscKeyDown);
    });

    document.addEventListener(`keydown`, onEscKeyDown);
    return this._popupSection.getElement();
  }

  _renderPopup(film) {
    document.body.appendChild(this._createPopupCard(film));
  }

  _closePopup(openedPopup, removeFunction) {
    openedPopup.remove();
    this._popupSection.removeElement();
    document.removeEventListener(`keydown`, removeFunction);
  }
}
