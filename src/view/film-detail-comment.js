import {generateComments} from '../mock/film.js';

const emoji = [
  `smile.png`,
  `sleeping.png`,
  `puke.png`,
  `angry.png`
];

export const createComment = (commentList, authorList, commentDate) => {
  const allComments = generateComments(5);
  let commentEmoji;
  switch (commentList) {
    case allComments[0]:
      commentEmoji = emoji[0];
      break;
    case allComments[1]:
      commentEmoji = emoji[2];
      break;
    case allComments[2]:
      commentEmoji = emoji[0];
      break;
    case allComments[3]:
      commentEmoji = emoji[1];
      break;
    case allComments[4]:
      commentEmoji = emoji[3];
      break;
  }

  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${commentEmoji}" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">${commentList}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${authorList}</span>
          <span class="film-details__comment-day">${commentDate}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};
