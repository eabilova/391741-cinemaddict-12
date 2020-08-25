import {getRandomInteger} from '../util.js';
const FILM_TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const AUTHORS = [
  `Tim Mocoveev`,
  `John Doe`,
  `John Snow`,
  `Movie Lover`,
  `Watch Yourself`
];

const MONTH = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const GENRE = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
];

const DIRECTOR_NAMES = [
  `Anthony Mann`,
  `John Cromwell`,
  `Nicholas Webster`,
  `Armand Schaefer`,
  `Dave Fleischer`,
  `Otto Preminger`
];

const WRITER_NAMES = [
  `Walter Newman`,
  `Lewis Meltzer`,
  `Ben Hecht`,
  `Rose Franken`,
  `Jo Swerling`,
  `Frank Ryan`,
  `Jack Mercer`,
  `Mae Questel`,
  `Gus Wickie`,
  `Lou Fleischer`,
  `Lindsley Parsons`,
  `Will Beale`,
  `Glenville Mareth`,
  `Paul L. Jacobson`,
  `Benjamin Glazer`
];

const ACTOR_NAMES = [
  `Hal Skelly`,
  `Nancy Carroll`,
  `John Call`,
  `Vincent Beck`,
  `Leonard Hicks`,
  `John Wayne`,
  `Nancy Shubert`,
  `Lane Chandler`,
  `Jack Mercer`,
  `Mae Questel`,
  `Gus Wickie`,
  `Carole Lombard`,
  `James Stewart`,
  `Frank Sinatra`,
  `Eleanor Parker`,
  `Kim Novak`,
  `Arnold Stang`
];

const COUNTRY = [
  `USA`,
  `Great Britain`,
  `Ireland`,
  `Poland`,
  `Russia`
];

const GENRE_NUMBER = 3;


const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

export const COMMENTS = [
  `Понравилось все, и сюжет и игра актеров, особенно главный герой. Если хотите получить заряд положительных эмоций, то сходите, не пожалеете )...`,
  `Сюжет, оригинальности и зрелищ нет, а также музыка — режиссер специально выбрал несочетающиеся симфонии`,
  `Фильм, который шокирует и трогает за душу одновременно... Фильм, который я решилась пересмотреть только спустя 6 лет. Фильм, во время просмотра которого невозможно не рыдать...`,
  `Добрая и поучительная история, напоминающая об уязвимости и беззащитности природы`,
  `Очень противоречивый фильм. Что сняли по книге?`
];

const generateFilmTitle = () => {
  const randomIndex = getRandomInteger(0, FILM_TITLES.length - 1);

  return FILM_TITLES[randomIndex];
};

const generatePoster = () => {
  const randomIndex = getRandomInteger(0, POSTERS.length - 1);

  return POSTERS[randomIndex];
};

const generateDescription = () => {
  const splitDescription = DESCRIPTION.split(`. `);

  return splitDescription.slice(0, getRandomInteger(0, splitDescription.length - 1)).join(`. `);
};

const generateAuthors = () => {
  const randomIndex = getRandomInteger(0, AUTHORS.length - 1);

  return AUTHORS[randomIndex];
};

const generateCommentDate = () => {
  let year = getRandomInteger(2000, 2020);
  let month = getRandomInteger(1, 12);
  let day = getRandomInteger(1, 31);
  let hour = getRandomInteger(0, 23);
  let minute = getRandomInteger(1, 59);

  return year + `/` + month + `/` + day + ` ` + hour + `:` + minute;
};

const generateDuration = () => {
  return getRandomInteger(0, 180);
};

const generateDate = (filmYear) => {
  const randomIndex = getRandomInteger(0, MONTH.length - 1);
  return getRandomInteger(1, 31) + ` ` + MONTH[randomIndex] + ` ` + filmYear;
};

const generateGenre = () => {
  const genres = [];
  for (let i = 0; i < GENRE_NUMBER; i++) {
    const randomIndex = getRandomInteger(0, GENRE.length - 1);
    genres[i] = GENRE[randomIndex];
  }

  return genres;
};

const generateDirectorName = () => {
  const randomIndex = getRandomInteger(0, DIRECTOR_NAMES.length - 1);

  return DIRECTOR_NAMES[randomIndex];
};

const generateWriterNames = () => {
  return WRITER_NAMES.slice(0, getRandomInteger(getRandomInteger(0, WRITER_NAMES.length - 1), WRITER_NAMES.length - 1)).join(`, `);
};

const generateActorNames = () => {
  return ACTOR_NAMES.slice(0, getRandomInteger(getRandomInteger(0, ACTOR_NAMES.length - 1), ACTOR_NAMES.length - 1)).join(`, `);
};

const generateCountry = () => {
  const randomIndex = getRandomInteger(0, COUNTRY.length - 1);

  return COUNTRY[randomIndex];
};

export const generateComments = () => {
  const randomIndex = getRandomInteger(0, COMMENTS.length - 1);

  return COMMENTS[randomIndex];
};

const generateCommentList = (commentNumber) => {
  let comments = [];
  for (let i = 0; i < commentNumber; i++) {
    comments[i] = {
      message: generateComments(),
      author: generateAuthors(),
      date: generateCommentDate(),
    };
  }
  return comments;
};

export const generateFilm = () => {
  const commentNumber = getRandomInteger(0, 5);
  const filmTitle = generateFilmTitle();
  const filmYear = `19` + getRandomInteger(10, 99);
  const ageLimit = getRandomInteger(0, 99);

  return {
    ageLimit,
    title: filmTitle,
    originalTitle: filmTitle,
    rating: getRandomInteger(0, 99) / 10,
    fullDate: generateDate(filmYear),
    year: filmYear,
    duration: generateDuration(),
    genres: generateGenre(),
    src: generatePoster(),
    description: generateDescription(),
    director: generateDirectorName(),
    writers: generateWriterNames(),
    actors: generateActorNames(),
    country: generateCountry(),
    comments: generateCommentList(commentNumber),
  };
};
