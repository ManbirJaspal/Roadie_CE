import _ from 'lodash';
import {
  FETCH_LIST,
  CLEAR_LIST,
  RATING_COND_LIST
} from '../actions/types';

const DEFAULT = {
  starValue: null
};
const EMPTY = {};

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {...state, ..._.mapKeys(action.payload, "title")};
    case RATING_COND_LIST:
      return {...state, starValue: action.payload};
    case CLEAR_LIST:
      return EMPTY;
    default:
      return state;
  }
}
