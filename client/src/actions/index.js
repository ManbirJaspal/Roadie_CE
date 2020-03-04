import reviews from '../apis/reviews'
import axios from "axios";
import qs from 'qs';
import {
  FETCH_LIST,
  CLEAR_LIST,
  RATING_COND_LIST,
  CREATE_REVIEW,
  RATING_AVG,
  CLEAR_RATING,
  RATING_LIST,
  TOTAL_STARS
} from './types';


export const getReviews = () => async dispatch => {
  await reviews.get("/reviews")
  .then(response => {
    dispatch({
      type: FETCH_LIST,
      payload: response.data
    })
  }, function(error) {
    console.log(error);
  });
};

export const renderListWithRating = (rating) => async dispatch => {
  dispatch({
    type: RATING_COND_LIST,
    payload: rating
  })
}

export const calculateAverage = () => async dispatch => {
  await reviews.get("/stars")
  .then(response => {
    var val = (((1 * response.data[0].num) + (2 * response.data[1].num) + (3 * response.data[2].num) +(4 * response.data[3].num) + (5 * response.data[4].num))/(response.data[0].num + response.data[1].num + response.data[2].num + response.data[3].num + response.data[4].num));
    var value = Math.round(val * 10) / 10;
    dispatch({
      type: RATING_AVG,
      payload: value
    })
  }, function(error) {
    console.log(error);
  });
}

export const calculateTotalStars = () => async dispatch => {
  console.log("inside calculateTotalStars()");
  await reviews.get("/stars")
  .then(response => {
    var val = (response.data[0].num + response.data[1].num + response.data[2].num + response.data[3].num + response.data[4].num);
    dispatch({
      type: TOTAL_STARS,
      payload: val
    })
  }, function(error) {
    console.log(error);
  });
}

export const createReview = (name, title, review, rating) => async (dispatch) => {
  console.log("inside createReview() actions");
  let today = new Date().toLocaleDateString()
  const createReview_Data = {
    name: name,
    title: title,
    review: review,
    rating: rating,
    date: today
  };
  await reviews.post("/reviews", createReview_Data)
  .then(response => {
    console.log(response);
  },
  function(error) {
    console.log(error)
  }
);
}

export const addtoStars = (starId) => async (dispatch, getState) => {
  const url = "/stars/" + starId;
  const starUpdate = getState().rating[starId].num + 1
  const updateStars_Data = {
    num: starUpdate
  };
  await reviews.patch(url, updateStars_Data)
  .then(response => {
    console.log(response);
  },
  function(error) {
    console.log(error)
  }
);
}

export const getRatingsList = () => async (dispatch) => {
  await reviews.get("/stars")
  .then(response => {
    dispatch({
      type: RATING_LIST,
      payload: response.data
    })
  }, function(error) {
    console.log(error);
  });
};

export const clearRating = () => (dispatch) => {
  console.log("inside clearRating in actionS");
  dispatch({
    type: CLEAR_RATING
  })
};

export const clearList = () => (dispatch) => {
  console.log("inside clearLIST() in actionS");
  dispatch({
    type: CLEAR_LIST
  })
};
