import _ from 'lodash';
import {
  RATING_AVG,
  CLEAR_RATING,
  RATING_LIST,
  TOTAL_STARS
} from '../actions/types';

const DEFAULT = {
avgRating: null,
totalStars: null
};
const EMPTY = {};

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case RATING_LIST:
      return {...state, ..._.mapKeys(action.payload, "id")};
    case RATING_AVG:
      return {...state, avgRating: action.payload};
      case TOTAL_STARS:
        return {...state, totalStars: action.payload};
    case CLEAR_RATING:
      return {...state, avgRating: null}

    default:
      return state;
  }
}
