import { types } from '../../actions/types';

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
}
