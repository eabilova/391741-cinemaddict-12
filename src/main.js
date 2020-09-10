import {render, RenderPosition} from './utils/render.js';
import {ALL_CARDS_COUNT} from './const.js';
import UserLevelName from './view/level-name.js';
import SiteMenu from './view/site-menu.js';
import StatisticsParagraph from './view/statistics-paragraph.js';
import {generateFilm} from './mock/film.js';
import {generateMenuSiteData} from './mock/site-menu.js';
import MovieListPresenter from './presenter/movie-list.js';

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);

const films = new Array(ALL_CARDS_COUNT).fill().map(generateFilm);

// Header
render(header, new UserLevelName(), RenderPosition.BEFOREEND);
const menuInfo = generateMenuSiteData();
render(main, new SiteMenu(menuInfo), RenderPosition.AFTERBEGIN);


// Films
const filmList = new MovieListPresenter(main);
filmList.init(films);

// Footer
render(footerStatistics, new StatisticsParagraph(), RenderPosition.AFTERBEGIN);

