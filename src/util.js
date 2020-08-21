export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const formatFilmDuration = (duration) => {
  const hour = 60;
  return duration < hour ?
    `${duration}m`
    :
    (duration / 60 | 0) + `h ` + duration % 60 + `m`;
};
