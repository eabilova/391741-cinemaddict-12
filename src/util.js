export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const defineFilmDuration = (duration) => {
  const hour = 60;
  if (duration > hour) {
    return (duration / 60 | 0) + `h ` + duration % 60 + `m`;
  } else {
    return duration + `m`;
  }
};
