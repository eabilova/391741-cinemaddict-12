import AbstractView from './abstract.js';
import {SortType} from '../const.js';

const createSortingElement = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${SortType.DATE}">Sort by date</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
    </ul>`
  );
};

export default class SortingElement extends AbstractView {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortingElement();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }
    if (!this._selectedFilter) {
      this._selectedFilter = document.querySelector(`.sort__button--active`);
    }
    if (evt.target !== this._selectedFilter) {
      evt.preventDefault();
      this._selectedFilter.classList.remove(`sort__button--active`);
      this._callback.sortTypeChange(evt.target.dataset.sortType);
      this._selectedFilter = evt.target;
      this._selectedFilter.classList.add(`sort__button--active`);
    }
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}

