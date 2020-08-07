const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateFilmTitle = () => {
  const filmTitles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`,
    `The Great Flamarion`,
    `Made for Each Other`
  ];

  const randomIndex = getRandomInteger(0, filmTitles.length - 1);

  return filmTitles[randomIndex];
};

const generatePoster = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};

const generateDescription = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

  const splitDescription = description.split(`. `);

  const randomIndex = getRandomInteger(0, splitDescription.length - 1);

  return splitDescription[randomIndex];
};

const generateComments = () => {
  const comments = [
    `Понравилось все, и сюжет и игра актеров, особенно главный герой. Если хотите получить заряд положительных эмоций, то сходите, не пожалеете )...`,
    `Сюжет, оригинальности и зрелищ нет, а также музыка — режиссер специально выбрал несочетающиеся симфонии`,
    `Фильм, который шокирует и трогает за душу одновременно... Фильм, который я решилась пересмотреть только спустя 6 лет. Фильм, во время просмотра которого невозможно не рыдать...`,
    `Добрая и поучительная история, напоминающая об уязвимости и беззащитности природы`,
    `Очень противоречивый фильм. Что сняли по книге?`
  ];

  const randomIndex = getRandomInteger(0, comments.length - 1);

  return comments[randomIndex];
};

export const generateFilmCard = () => {
  return {
    title: generateFilmTitle(),
    rating: getRandomInteger(0, 9),
    year: getRandomInteger(),
    duration: getRandomInteger(),
    genre: getRandomInteger(),
    src: generatePoster(),
    description: generateDescription(),
    comments: generateComments(),
  };
};
