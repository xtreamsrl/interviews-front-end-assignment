import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postReducer from './slice/slicePost';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
