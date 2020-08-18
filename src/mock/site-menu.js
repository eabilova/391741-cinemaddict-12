import {getRandomInteger} from '../util.js';

export const generateMenuSiteData = () => {
  return {
    watchlist: getRandomInteger(0, 20),
    favourite: getRandomInteger(0, 20),
    history: getRandomInteger(0, 20),
  };
};
