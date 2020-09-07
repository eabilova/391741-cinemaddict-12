import AbstractView from './abstract.js';

const createStatisticsParagraph = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};

export default class StatisticsParagraph extends AbstractView {
  getTemplate() {
    return createStatisticsParagraph();
  }
}
