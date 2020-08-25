import {COMMENTS} from '../mock/film.js';

const emoji = [
  `smile.png`,
  `sleeping.png`,
  `puke.png`,
  `angry.png`
];

export const createComment = (message, author, date) => {
  let commentEmoji;
  switch (message) {
    case COMMENTS[0]:
      commentEmoji = emoji[0];
      break;
    case COMMENTS[1]:
      commentEmoji = emoji[2];
      break;
    case COMMENTS[2]:
      commentEmoji = emoji[0];
      break;
    case COMMENTS[3]:
      commentEmoji = emoji[1];
      break;
    case COMMENTS[4]:
      commentEmoji = emoji[3];
      break;
  }

  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${commentEmoji}" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">${message}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${author}</span>
          <span class="film-details__comment-day">${date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};
