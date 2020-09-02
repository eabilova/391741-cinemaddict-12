
export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

export const render = (container, element, place) => {
  container.insertAdjacentElement(place, element);
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

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
    `${(duration / 60 | 0)}h ${duration % 60}m`;
};

export const closePopup = (openedPopup, removeFunction) => {
  openedPopup.remove();
  document.removeEventListener(`keydown`, removeFunction);
};
