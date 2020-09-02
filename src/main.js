import {render, RenderPosition} from './util.js';
import UserLevelName from './view/level-name.js';
import SiteMenu from './view/site-menu.js';
import SortingElement from './view/sorting-element.js';
import FilmSection from './view/film-section.js';
import FilmList from './view/film-list.js';
import FilmListContainer from './view/film-list-container.js';
import FilmCardTemplate from './view/film-card-template.js';
import ShowMoreButton from './view/show-more-button.js';
import TopFilmList from './view/top-film-list.js';
import MostCommentedFilmList from './view/most-commented-list.js';
import StatisticsParagraph from './view/statistics-paragraph.js';
import FilmPopupSection from './view/film-detail-popup-section.js';
import FilmPopupForm from './view/film-detail-popup-form.js';
import FilmPopupTopContainer from './view/film-detail-top-container.js';
import FilmDetailInfoWrap from './view/film-detail-info-wrap.js';
import FilmDetailControls from './view/film-detail-controls.js';
import FilmDetailInfo from './view/film-detail-info.js';
import FilmPopupBottomContainer from './view/film-detail-bottom-container.js';
import Comment from './view/film-detail-comment.js';
import FilmDetailsGenre from './view/film-details-genre.js';
import {generateFilm} from './mock/film.js';
import {generateMenuSiteData} from './mock/site-menu.js';

const ALL_CARDS_COUNT = 20;
const SHOW_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);
const footer = document.querySelector(`.footer`);

const films = new Array(ALL_CARDS_COUNT).fill().map(generateFilm);

const sortTopRatedFilms = () => {
  const ratedFilms = films.slice().sort((a, b) => b.rating - a.rating);
  return ratedFilms.slice(0, EXTRA_CARDS_COUNT);
};
const sortMostCommentedFilms = () => {
  const commentedFilms = films.slice().sort((a, b) => b.commentNumber - a.commentNumber);
  return commentedFilms.slice(0, EXTRA_CARDS_COUNT);
};

const createPopupCard = (film) => {
  // Popup
  const popupSection = new FilmPopupSection();
  render(footer, popupSection.getElement(), RenderPosition.AFTEREND);

  const popupForm = new FilmPopupForm();
  render(popupSection.getElement(), popupForm.getElement(), RenderPosition.AFTERBEGIN);

  const popupTopContainer = new FilmPopupTopContainer();
  render(popupForm.getElement(), popupTopContainer.getElement(), RenderPosition.AFTERBEGIN);

  const popupInfoWrap = new FilmDetailInfoWrap(film);
  render(popupTopContainer.getElement(), popupInfoWrap.getElement(), RenderPosition.BEFOREEND);
  render(popupTopContainer.getElement(), new FilmDetailControls().getElement(), RenderPosition.BEFOREEND);

  render(popupInfoWrap.getElement(), new FilmDetailInfo(film).getElement(), RenderPosition.BEFOREEND);

  const genreList = popupInfoWrap.getElement().querySelector(`.film-details__row:last-of-type`);
  const genreContainer = genreList.querySelector(`.film-details__cell`);
  const {genres} = film;
  genres.forEach((genre) => render(genreContainer, new FilmDetailsGenre(genre).getElement(), RenderPosition.BEFOREEND));


  // Popup Comment List
  render(popupForm.getElement(), new FilmPopupBottomContainer(film).getElement(), RenderPosition.BEFOREEND);
  const popupBottomContainer = popupForm.getElement().querySelector(`.form-details__bottom-container`);
  const popupcommentContainer = popupBottomContainer.querySelector(`.film-details__comments-list`);

  const {comments} = film;
  comments.forEach((comment) => render(popupcommentContainer, new Comment(comment.message, comment.author, comment.date).getElement(), RenderPosition.BEFOREEND));


  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closePopup(popupSection.getElement(), onEscKeyDown);
    }
  };

  popupTopContainer.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    closePopup(popupSection.getElement(), onEscKeyDown);
  });

  document.addEventListener(`keydown`, onEscKeyDown);
};

const closePopup = (openedPopup, removeFunction) => {
  openedPopup.remove();
  document.removeEventListener(`keydown`, removeFunction);
};

const renderPopup = (film) => {
  const popup = document.createElement(createPopupCard(film));
  document.appendChild(popup);
};

const renderFilms = (container, film) => {
  const filmCard = new FilmCardTemplate(film);
  render(container, filmCard.getElement(), RenderPosition.BEFOREEND);
  onFilmElementMouseClick(filmCard, `.film-card__poster`, film,);
  onFilmElementMouseClick(filmCard, `.film-card__title`, film);
  onFilmElementMouseClick(filmCard, `.film-card__comments`, film);
};

const onFilmElementMouseClick = (container, filmClass, film) => {
  container.getElement().querySelector(filmClass).addEventListener(`click`, () => {
    renderPopup(film);
  });
};

const showedFilms = films.slice(0, SHOW_COUNT);
const topRated = sortTopRatedFilms();
const mostCommentedFilms = sortMostCommentedFilms();

// Header
render(header, new UserLevelName().getElement(), RenderPosition.BEFOREEND);
const menuInfo = generateMenuSiteData();
render(main, new SiteMenu(menuInfo).getElement(), RenderPosition.AFTERBEGIN);
render(main, new SortingElement().getElement(), RenderPosition.BEFOREEND);
const filmSection = new FilmSection();
render(main, filmSection.getElement(), RenderPosition.BEFOREEND);

// All films
const filmList = new FilmList();
render(filmSection.getElement(), filmList.getElement(), RenderPosition.AFTERBEGIN);
const filmListContainer = new FilmListContainer();
render(filmList.getElement(), filmListContainer.getElement(), RenderPosition.BEFOREEND);

showedFilms.forEach((film) => {
  renderFilms(filmListContainer.getElement(), film);
});

render(filmList.getElement(), new ShowMoreButton().getElement(), RenderPosition.BEFOREEND);

// Top rated
render(filmSection.getElement(), new TopFilmList().getElement(), RenderPosition.BEFOREEND);
const extraFilmList = filmSection.getElement().querySelector(`.films-list--extra`);

render(extraFilmList, new FilmListContainer().getElement(), RenderPosition.BEFOREEND);
const topFilmListContainer = extraFilmList.querySelector(`.films-list__container`);

topRated.forEach((film) => render(topFilmListContainer, new FilmCardTemplate(film).getElement(), RenderPosition.BEFOREEND));

// Most commented
render(filmSection.getElement(), new MostCommentedFilmList().getElement(), RenderPosition.BEFOREEND);
const MostCommentedFilms = filmSection.getElement().querySelector(`.films-list--extra:last-child`);

render(MostCommentedFilms, new FilmListContainer().getElement(), RenderPosition.BEFOREEND);
const MostFilmListContainer = MostCommentedFilms.querySelector(`.films-list__container`);

mostCommentedFilms.forEach((film) => render(MostFilmListContainer, new FilmCardTemplate(film).getElement(), RenderPosition.BEFOREEND));

// Footer
render(footerStatistics, new StatisticsParagraph().getElement(), RenderPosition.AFTERBEGIN);

