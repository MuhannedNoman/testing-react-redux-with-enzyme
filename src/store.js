import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './reducers';

export const middlewares = [ReduxThunk];

export const creatStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = creatStoreWithMiddleware(RootReducer);
