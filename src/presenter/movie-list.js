import {render, RenderPosition, remove} from '../utils/render.js';
import {renderPopup, main} from '../main.js';
import FilmSection from '../view/film-section.js';
import FilmList from '../view/film-list.js';
import NoFilmMessage from '../view/no-films.js';
import FilmListContainer from '../view/film-list-container.js';
import FilmCardTemplate from '../view/film-card-template.js';
import ShowMoreButton from '../view/show-more-button.js';
import TopFilmList from '../view/top-film-list.js';
import MostCommentedFilmList from '../view/most-commented-list.js';

const SHOW_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;


export default class MovieList {
  constructor(container) {
    this._container = container;
    this._filmSection = new FilmSection();
    this._filmList = new FilmList();
    this._noFilmList = new NoFilmMessage();
    this._filmListContainer = new FilmListContainer();
    this._loadMoreButtonComponent = new ShowMoreButton();
  }

  init(films) {
    this._films = films.slice();
    this._topRated = films.slice().sort((a, b) => b.rating - a.rating).slice(0, EXTRA_CARDS_COUNT);
    this._mostCommentedFilms = films.slice().sort((a, b) => b.commentNumber - a.commentNumber).slice(0, EXTRA_CARDS_COUNT);
    render(main, this._filmSection, RenderPosition.BEFOREEND);
    this._renderFilmContainer();

  }

  _renderFilms() {
    render(this._filmSection, this._filmList, RenderPosition.AFTERBEGIN);
    render(this._filmList, this._filmListContainer, RenderPosition.BEFOREEND);

    this._renderFilmList();

    this._renderLoadMoreButton();

    // Top rated
    render(this._filmSection, new TopFilmList(), RenderPosition.BEFOREEND);

    this._extraFilmList = this._filmSection.getElement().querySelector(`.films-list--extra`);
    render(this._extraFilmList, new FilmListContainer(), RenderPosition.BEFOREEND);

    this._topFilmListContainer = this._extraFilmList.querySelector(`.films-list__container`);
    this._topRated.forEach((film) => {
      this._renderFilm(this._topFilmListContainer, film);
    });

    // Most commented
    render(this._filmSection, new MostCommentedFilmList(), RenderPosition.BEFOREEND);
    this._mostCommentedFilmList = this._filmSection.getElement().querySelector(`.films-list--extra:last-child`);
    render(this._mostCommentedFilmList, new FilmListContainer(), RenderPosition.BEFOREEND);
    this._mostFilmListContainer = this._mostCommentedFilmList.querySelector(`.films-list__container`);

    this._mostCommentedFilms.forEach((film) => {
      this._renderFilm(this._mostFilmListContainer, film);
    });
  }

  _renderShowFilmList(from, to) {
    this._films
    .slice(from, to)
    .forEach((film) => this._renderFilm(this._filmListContainer, film));
  }

  _renderFilm(container, film) {
    this._filmCard = new FilmCardTemplate(film);
    render(container, this._filmCard, RenderPosition.BEFOREEND);
    this._filmCard.setFilmElementMouseClick(() => {
      renderPopup(film);
    });
  }

  _renderNoFilms() {
    render(this._filmSection, this._noFilmList, RenderPosition.AFTERBEGIN);
  }

  _renderFilmContainer() {
    if (this._films.length === 0) {
      this._renderNoFilms();
    } else {
      this._renderFilms();
    }
  }

  _renderLoadMoreButton() {
    let renderedShowCount = SHOW_COUNT;
    render(this._filmList, this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(() => {
      this._renderShowFilmList(renderedShowCount, renderedShowCount + SHOW_COUNT);

      renderedShowCount += SHOW_COUNT;

      if (renderedShowCount >= this._films.length) {
        remove(this._loadMoreButtonComponent);
      }
    });
  }

  _renderFilmList() {
    this._renderShowFilmList(0, Math.min(this._films.length, SHOW_COUNT));

    if (this._films.length > SHOW_COUNT) {
      this._renderLoadMoreButton();
    }
  }
}
