'use strict'
const ALL_CARDS_COUNT = '5';
const EXTRA_CARDS_COUNT = '2';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footerStatistics =  document.querySelector('.footer__statistics');


const createUserLevelName = () => {
    return (
      `<section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    );
};

const createSiteMenu = () => {
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

const createSortingElement = () => {
  return (
    `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
  );
};

const createFilmSection = () => {
  return (
    `<section class="films">
    </section>`
  );
};

const createFilmList = () => {
  return (
    `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`
  );
};

const createFilmListContainer = () => {
  return (
    `<div class="films-list__container">
    </div>`
  );
};

const createFilmCardTemplate = () => {
  return (
    `<article class="film-card">
    <h3 class="film-card__title"></h3>
    <p class="film-card__rating"></p>
    <p class="film-card__info">
      <span class="film-card__year"></span>
      <span class="film-card__duration"></span>
      <span class="film-card__genre"></span>
    </p>
    <img src="" alt="" class="film-card__poster">
    <p class="film-card__description"></p>
    <a class="film-card__comments"></a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"></button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"></button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"></button>
    </form>
  </article>`
  );
};

const createShowMoreButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

const createTopFilmList = () => {
  return (
    `<section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    </section>`
  );
};

const createMostCommentedFilmList = () => {
  return (
    `<section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    </section>`
  );
};

const createStatisticsParagraph = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Header
renderElement(header, createUserLevelName(), `beforeend`);
renderElement(main, createSiteMenu(), `afterbegin`);
renderElement(main, createSortingElement(), `beforeend`);
renderElement(main, createFilmSection(), `beforeend`);

// All films
const filmSection = main.querySelector('.films');
renderElement(filmSection, createFilmList(), `afterbegin`);

const filmList = filmSection.querySelector('.films-list')
renderElement(filmList, createFilmListContainer(), `beforeend`);

const filmListContainer = filmList.querySelector('.films-list__container');
for (let i = 0; i < ALL_CARDS_COUNT; i++) {
  renderElement(filmListContainer, createFilmCardTemplate(), `beforeend`);
};
renderElement(filmList, createShowMoreButton(), `beforeend`);

// Top rated
renderElement(filmSection, createTopFilmList(), `beforeend`);
const extraFilmList = filmSection.querySelector('.films-list--extra')

renderElement(extraFilmList, createFilmListContainer(), `beforeend`);
const topFilmListContainer = extraFilmList.querySelector('.films-list__container');

for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  renderElement(topFilmListContainer, createFilmCardTemplate(), `beforeend`);
};

// Most commented
renderElement(filmSection, createMostCommentedFilmList(), `beforeend`);
const MostCommentedFilmList = filmSection.querySelector('.films-list--extra:last-child')

renderElement(MostCommentedFilmList, createFilmListContainer(), `beforeend`);
const MostFilmListContainer = MostCommentedFilmList.querySelector('.films-list__container');

for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  renderElement(MostFilmListContainer, createFilmCardTemplate(), `beforeend`);
};

// Footer
renderElement(footerStatistics, createStatisticsParagraph(), `afterbegin`);

