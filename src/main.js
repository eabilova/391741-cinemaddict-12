import {createUserLevelName} from './view/level-name.js';
import {createSiteMenu} from './view/site-menu.js';
import {createSortingElement} from './view/sorting-element.js';
import {createFilmSection} from './view/film-section.js';
import {createFilmList} from './view/film-list.js';
import {createFilmListContainer} from './view/film-list-container.js';
import {createFilmCardTemplate} from './view/film-card-template.js';
import {createShowMoreButton} from './view/show-more-button.js';
import {createTopFilmList} from './view/top-film-list.js';
import {createMostCommentedFilmList} from './view/most-commented-list.js';
import {createStatisticsParagraph} from './view/statistics-paragraph.js';
import {generateFilm} from './mock/film.js';
import {createFilmPopupSection} from './view/film-detail-popup-section.js';
import {createFilmPopupForm} from './view/film-detail-popup-form.js';
import {createFilmPopupTopContainer} from './view/film-detail-top-container.js';
import {createFilmDetailInfoWrap} from './view/film-detail-info-wrap.js';
import {createFilmDetailControls} from './view/film-detail-controls.js';
import {createFilmDetailInfo} from './view/film-detail-info.js';
import {createFilmPopupBottomContainer} from './view/film-detail-bottom-container.js';
import {createComment} from './view/film-detail-comment.js';
import {generateMenuSiteData} from './mock/site-menu.js';

const ALL_CARDS_COUNT = 20;
const SHOW_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);
const footer = document.querySelector(`.footer`);

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const films = new Array(ALL_CARDS_COUNT).fill().map(generateFilm);

const sortTopRatedFilms = () => {
  const ratedFilms = films.sort((a, b) => b.rating - a.rating);
  return ratedFilms.slice(0, EXTRA_CARDS_COUNT);
};
const sortMostCommentedFilms = () => {
  const commentedFilms = films.sort((a, b) => b.commentNumber - a.commentNumber);
  return commentedFilms.slice(0, EXTRA_CARDS_COUNT);
};

const showedFilms = films.slice(0, SHOW_COUNT);
const topRated = sortTopRatedFilms();
const mostCommentedFilms = sortMostCommentedFilms();

// Header
renderElement(header, createUserLevelName(), `beforeend`);
const menuInfo = generateMenuSiteData();
renderElement(main, createSiteMenu(menuInfo), `afterbegin`);
renderElement(main, createSortingElement(), `beforeend`);
renderElement(main, createFilmSection(), `beforeend`);

// All films
const filmSection = main.querySelector(`.films`);
renderElement(filmSection, createFilmList(), `afterbegin`);

const filmList = filmSection.querySelector(`.films-list`);
renderElement(filmList, createFilmListContainer(), `beforeend`);

const filmListContainer = filmList.querySelector(`.films-list__container`);
showedFilms.forEach((film) => renderElement(filmListContainer, createFilmCardTemplate(film), `beforeend`));

renderElement(filmList, createShowMoreButton(), `beforeend`);

// Top rated
renderElement(filmSection, createTopFilmList(), `beforeend`);
const extraFilmList = filmSection.querySelector(`.films-list--extra`);

renderElement(extraFilmList, createFilmListContainer(), `beforeend`);
const topFilmListContainer = extraFilmList.querySelector(`.films-list__container`);

topRated.forEach(function (film) {
  renderElement(topFilmListContainer, createFilmCardTemplate(film), `beforeend`);
});

// Most commented
renderElement(filmSection, createMostCommentedFilmList(), `beforeend`);
const MostCommentedFilmList = filmSection.querySelector(`.films-list--extra:last-child`);

renderElement(MostCommentedFilmList, createFilmListContainer(), `beforeend`);
const MostFilmListContainer = MostCommentedFilmList.querySelector(`.films-list__container`);

mostCommentedFilms.forEach(function (film) {
  renderElement(MostFilmListContainer, createFilmCardTemplate(film), `beforeend`);
});

// Footer
renderElement(footerStatistics, createStatisticsParagraph(), `afterbegin`);

// Popup
renderElement(footer, createFilmPopupSection(), `afterend`);
const popupSection = document.querySelector(`.film-details`);

renderElement(popupSection, createFilmPopupForm(), `afterbegin`);
const popupForm = popupSection.querySelector(`.film-details__inner`);

renderElement(popupForm, createFilmPopupTopContainer(), `afterbegin`);
const popupTopContainer = popupForm.querySelector(`.form-details__top-container`);

renderElement(popupTopContainer, createFilmDetailInfoWrap(films[0]), `beforeend`);
renderElement(popupTopContainer, createFilmDetailControls(), `beforeend`);

const popupInfoWrap = popupTopContainer.querySelector(`.film-details__info-wrap`);
renderElement(popupInfoWrap, createFilmDetailInfo(films[0]), `beforeend`);

// Popup Comment List
renderElement(popupForm, createFilmPopupBottomContainer(films[0]), `beforeend`);
const popupBottomContainer = popupForm.querySelector(`.form-details__bottom-container`);
const popupcommentContainer = popupBottomContainer.querySelector(`.film-details__comments-list`);

const {comment} = films[0];
comment.forEach((item) => renderElement(popupcommentContainer, createComment(item.commentList, item.authorList, item.commentDate), `beforeend`));

