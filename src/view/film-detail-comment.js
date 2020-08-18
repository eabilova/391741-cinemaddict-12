export const createComment = (commentList, authorList, commentDate) => {

  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
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
