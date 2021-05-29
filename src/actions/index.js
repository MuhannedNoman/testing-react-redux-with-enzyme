import { types } from './types';
import axios from 'axios';

import { API_LINK } from './../constants';

export const fetchPosts = () => async (dispatch) => {
  await axios
    .get(API_LINK)
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
