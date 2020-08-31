import {createElement} from "../util.js";

const createStatisticsParagraph = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};

export default class StatisticsParagraph {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createStatisticsParagraph();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
