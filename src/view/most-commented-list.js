import AbstractView from './abstract.js';

const createMostCommentedFilmList = () => {
  return (
    `<section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    </section>`
  );
};

export default class MostCommentedFilmList extends AbstractView {
  getTemplate() {
    return createMostCommentedFilmList();
  }
}
