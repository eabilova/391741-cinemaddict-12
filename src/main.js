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
import {createFilmDetailsPopup} from './view/film-detail-popup.js';
import {generateFilmCard} from './mock/film-card-template.js';

const ALL_CARDS_COUNT = `20`;
const EXTRA_CARDS_COUNT = `2`;

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);
const footer = document.querySelector(`.footer`);

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const cards = new Array(ALL_CARDS_COUNT).fill().map(generateFilmCard);

// Header
renderElement(header, createUserLevelName(), `beforeend`);
renderElement(main, createSiteMenu(), `afterbegin`);
renderElement(main, createSortingElement(), `beforeend`);
renderElement(main, createFilmSection(), `beforeend`);

// All films
const filmSection = main.querySelector(`.films`);
renderElement(filmSection, createFilmList(), `afterbegin`);

const filmList = filmSection.querySelector(`.films-list`);
renderElement(filmList, createFilmListContainer(), `beforeend`);

const filmListContainer = filmList.querySelector(`.films-list__container`);
for (let i = 0; i < ALL_CARDS_COUNT; i++) {
  renderElement(filmListContainer, createFilmCardTemplate(cards[i]), `beforeend`);
}
renderElement(filmList, createShowMoreButton(), `beforeend`);

// Top rated
renderElement(filmSection, createTopFilmList(), `beforeend`);
const extraFilmList = filmSection.querySelector(`.films-list--extra`);

renderElement(extraFilmList, createFilmListContainer(), `beforeend`);
const topFilmListContainer = extraFilmList.querySelector(`.films-list__container`);

for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  renderElement(topFilmListContainer, createFilmCardTemplate(), `beforeend`);
}

// Most commented
renderElement(filmSection, createMostCommentedFilmList(), `beforeend`);
const MostCommentedFilmList = filmSection.querySelector(`.films-list--extra:last-child`);

renderElement(MostCommentedFilmList, createFilmListContainer(), `beforeend`);
const MostFilmListContainer = MostCommentedFilmList.querySelector(`.films-list__container`);

for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  renderElement(MostFilmListContainer, createFilmCardTemplate(), `beforeend`);
}

// Footer
renderElement(footerStatistics, createStatisticsParagraph(), `afterbegin`);

// Popup
renderElement(footer, createFilmDetailsPopup(), `afterend`);
