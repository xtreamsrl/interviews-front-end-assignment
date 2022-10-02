import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postReducer from './slice/postSlice';
import favouriteReducer from './slice/favouriteSlice';

const rootReducer = combineReducers({
  post: postReducer,
  favourite: favouriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
