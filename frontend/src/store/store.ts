import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipes/recipesSlice';
import dietsReducer from '../features/diets/dietsSlice';
import difficultiesReducer from '../features/difficulties/difficultiesSlice';
import cuisinesReducer from '../features/cuisines/cuisinesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    diets: dietsReducer,
    difficulties: difficultiesReducer,
    cuisines: cuisinesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
