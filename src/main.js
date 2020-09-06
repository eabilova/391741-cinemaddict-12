import {render, RenderPosition} from './utils/render.js';
import UserLevelName from './view/level-name.js';
import SiteMenu from './view/site-menu.js';
import SortingElement from './view/sorting-element.js';
import FilmSection from './view/film-section.js';
import FilmList from './view/film-list.js';
import NoFilmMessage from './view/no-films.js';
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

  const popupForm = new FilmPopupForm();
  render(popupSection, popupForm, RenderPosition.AFTERBEGIN);

  const popupTopContainer = new FilmPopupTopContainer();
  render(popupForm, popupTopContainer, RenderPosition.AFTERBEGIN);

  const popupInfoWrap = new FilmDetailInfoWrap(film);
  render(popupTopContainer, popupInfoWrap, RenderPosition.BEFOREEND);
  render(popupTopContainer, new FilmDetailControls(), RenderPosition.BEFOREEND);

  render(popupInfoWrap, new FilmDetailInfo(film), RenderPosition.BEFOREEND);

  const genreList = popupInfoWrap.getElement().querySelector(`.film-details__row:last-of-type`);
  const genreContainer = genreList.querySelector(`.film-details__cell`);
  const {genres} = film;
  genres.forEach((genre) => render(genreContainer, new FilmDetailsGenre(genre), RenderPosition.BEFOREEND));


  // Popup Comment List
  render(popupForm, new FilmPopupBottomContainer(film), RenderPosition.BEFOREEND);
  const popupBottomContainer = popupForm.getElement().querySelector(`.form-details__bottom-container`);
  const popupcommentContainer = popupBottomContainer.querySelector(`.film-details__comments-list`);

  const {comments} = film;
  comments.forEach((comment) => render(popupcommentContainer, new Comment(comment.message, comment.author, comment.date), RenderPosition.BEFOREEND));


  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closePopup(popupSection.getElement(), onEscKeyDown);
    }
  };

  popupTopContainer.setButtonClick(() => {
    closePopup(popupSection.getElement(), onEscKeyDown);
  });

  document.addEventListener(`keydown`, onEscKeyDown);
  return popupSection.getElement();
};

const closePopup = (openedPopup, removeFunction) => {
  openedPopup.remove();
  document.removeEventListener(`keydown`, removeFunction);
};

const renderPopup = (film) => {
  document.body.appendChild(createPopupCard(film));
};

const renderFilms = (container, film) => {
  const filmCard = new FilmCardTemplate(film);
  render(container, filmCard, RenderPosition.BEFOREEND);
  filmCard.setFilmElementMouseClick(() => {
    renderPopup(film);
  });
};

const showedFilms = films.slice(0, SHOW_COUNT);
const topRated = sortTopRatedFilms();
const mostCommentedFilms = sortMostCommentedFilms();

// Header
render(header, new UserLevelName(), RenderPosition.BEFOREEND);
const menuInfo = generateMenuSiteData();
render(main, new SiteMenu(menuInfo), RenderPosition.AFTERBEGIN);
render(main, new SortingElement(), RenderPosition.BEFOREEND);
const filmSection = new FilmSection();
render(main, filmSection, RenderPosition.BEFOREEND);

// All films
if (films.length === 0) {
  const noFilmList = new NoFilmMessage();
  render(filmSection, noFilmList, RenderPosition.AFTERBEGIN);
} else {
  const filmList = new FilmList();
  render(filmSection, filmList, RenderPosition.AFTERBEGIN);
  const filmListContainer = new FilmListContainer();
  render(filmList, filmListContainer, RenderPosition.BEFOREEND);

  showedFilms.forEach((film) => {
    renderFilms(filmListContainer, film);
  });

  render(filmList, new ShowMoreButton(), RenderPosition.BEFOREEND);

  // Top rated
  render(filmSection, new TopFilmList(), RenderPosition.BEFOREEND);
  const extraFilmList = filmSection.getElement().querySelector(`.films-list--extra`);

  render(extraFilmList, new FilmListContainer(), RenderPosition.BEFOREEND);
  const topFilmListContainer = extraFilmList.querySelector(`.films-list__container`);

  topRated.forEach((film) => {
    renderFilms(topFilmListContainer, film);
  });

  // Most commented
  render(filmSection, new MostCommentedFilmList(), RenderPosition.BEFOREEND);
  const MostCommentedFilms = filmSection.getElement().querySelector(`.films-list--extra:last-child`);

  render(MostCommentedFilms, new FilmListContainer(), RenderPosition.BEFOREEND);
  const MostFilmListContainer = MostCommentedFilms.querySelector(`.films-list__container`);

  mostCommentedFilms.forEach((film) => {
    renderFilms(MostFilmListContainer, film);
  });
}

// Footer
render(footerStatistics, new StatisticsParagraph(), RenderPosition.AFTERBEGIN);

