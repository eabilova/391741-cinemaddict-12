import AbstractView from './abstract.js';

const createTopFilmList = () => {
  return (
    `<section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    </section>`
  );
};

export default class TopFilmList extends AbstractView {
  getTemplate() {
    return createTopFilmList();
  }
}
