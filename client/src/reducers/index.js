import { combineReducers } from 'redux';
import listReducer from './listReducer';
import ratingReducer from './ratingReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers ({
  list: listReducer,
  form: formReducer,
  rating: ratingReducer
});
