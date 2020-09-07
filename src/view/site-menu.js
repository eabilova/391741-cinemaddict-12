import AbstractView from './abstract.js';

const createSiteMenu = (menuInfo) => {
  const {watchlist, favourite, history} = menuInfo;
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favourite}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

export default class SiteMenu extends AbstractView {
  constructor(menuInfo) {
    super();
    this._menuInfo = menuInfo;
  }

  getTemplate() {
    return createSiteMenu(this._menuInfo);
  }
}
