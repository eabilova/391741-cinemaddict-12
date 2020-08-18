import {getRandomInteger} from '../util.js';

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

const generatePoster = (title) => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ];

  const titleDetails = title.toLowerCase().split(` `);
  for (let i = 0; i < posters.length; i++) {
    const checkedPoster = posters[i];
    for (let k = 0; k < titleDetails.length; k++) {
      if (checkedPoster.includes(titleDetails[k]) && titleDetails[k] !== `the`) {
        return checkedPoster;
      }
    }
  }
};

const generateDescription = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

  const splitDescription = description.split(`. `);

  return splitDescription.slice(0, getRandomInteger(0, splitDescription.length - 1)).join(`. `);
};

const generateAuthors = (commentNumber) => {
  const authors = [
    `Tim Mocoveev`,
    `John Doe`,
    `John Snow`,
    `Movie Lover`,
    `Watch Yourself`
  ];

  return authors.slice(0, commentNumber);
};

const generateCommentDate = (commentNumber) => {
  let date = [];
  for (let i = 0; i < commentNumber; i++) {
    let year = getRandomInteger(2000, 2020);
    let month = getRandomInteger(1, 12);
    let day = getRandomInteger(1, 31);
    let hour = getRandomInteger(0, 23);
    let minute = getRandomInteger(1, 59);
    let fullDate = year + `/` + month + `/` + day + ` ` + hour + `:` + minute;
    date[i] = fullDate;
  }

  return date;
};

const generateDuration = () => {
  const hour = getRandomInteger(0, 2);
  const minute = getRandomInteger(0, 59);

  return hour + `h ` + minute + `m`;
};

const generateDate = (filmYear) => {
  const month = [
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

  const randomIndex = getRandomInteger(0, month.length - 1);
  return getRandomInteger(1, 31) + ` ` + month[randomIndex] + ` ` + filmYear;
};

const generateGenre = () => {
  const genre = [
    `Musical`,
    `Western`,
    `Drama`,
    `Comedy`,
    `Cartoon`,
    `Mystery`,
  ];

  const randomIndex = getRandomInteger(0, genre.length - 1);

  return genre[randomIndex];
};

const generateDirectorName = () => {
  const names = [
    `Anthony Mann`,
    `John Cromwell`,
    `Nicholas Webster`,
    `Armand Schaefer`,
    `Dave Fleischer`,
    `Otto Preminger`
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);

  return names[randomIndex];
};

const generateWriterNames = () => {
  const names = [
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

  return names.slice(0, getRandomInteger(getRandomInteger(0, names.length - 1), names.length - 1)).join(`, `);
};

const generateActorNames = () => {
  const names = [
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

  return names.slice(0, getRandomInteger(getRandomInteger(0, names.length - 1), names.length - 1)).join(`, `);
};

const generateCountry = () => {
  const country = [
    `USA`,
    `Great Britain`,
    `Ireland`,
    `Poland`,
    `Russia`
  ];
  const randomIndex = getRandomInteger(0, country.length - 1);

  return country[randomIndex];
};

export const generateComments = (commentNumber) => {
  const comments = [
    `Понравилось все, и сюжет и игра актеров, особенно главный герой. Если хотите получить заряд положительных эмоций, то сходите, не пожалеете )...`,
    `Сюжет, оригинальности и зрелищ нет, а также музыка — режиссер специально выбрал несочетающиеся симфонии`,
    `Фильм, который шокирует и трогает за душу одновременно... Фильм, который я решилась пересмотреть только спустя 6 лет. Фильм, во время просмотра которого невозможно не рыдать...`,
    `Добрая и поучительная история, напоминающая об уязвимости и беззащитности природы`,
    `Очень противоречивый фильм. Что сняли по книге?`
  ];

  return comments.slice(0, commentNumber);
};

export const generateFilmCard = () => {
  const commentNumber = getRandomInteger(0, 5);
  const filmTitle = generateFilmTitle();
  const filmYear = `19` + getRandomInteger(10, 99);
  const ageLimit = getRandomInteger(0, 99);

  return {
    ageLimit,
    title: filmTitle,
    originalTitle: filmTitle,
    rating: getRandomInteger(0, 9) + `.` + getRandomInteger(0, 9),
    fullDate: generateDate(filmYear),
    year: filmYear,
    duration: generateDuration(),
    genre: generateGenre(),
    src: generatePoster(filmTitle),
    description: generateDescription(),
    comment: {
      commentNumber,
      commentList: generateComments(commentNumber),
      authorList: generateAuthors(commentNumber),
      commentDate: generateCommentDate(commentNumber),
    },
    director: generateDirectorName(),
    writers: generateWriterNames(),
    actors: generateActorNames(),
    country: generateCountry(),
  };
};
