import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  favouritePosts: localStorage.getItem('favourite')
    ? JSON.parse(localStorage.getItem('favourite'))
    : [],
  postTotalQuantity: 0,
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavourite(state, action) {
      const postIndex = state.favouritePosts.findIndex((item) => item.id === action.payload.id);

      if (postIndex >= 0) {
        state.favouritePosts[postIndex].totalQuantity += 0;
        toast.info(`${action.payload.name} already added`, { position: 'top-left' });
      } else {
        const tempPost = { ...action.payload, totalQuantity: 1 };
        state.favouritePosts.push(tempPost);
        toast.success(`${action.payload.name} added`, { position: 'top-left' });
      }
      localStorage.setItem('favourite', JSON.stringify(state.favouritePosts));
    },

    removeFvouritePost(state, action) {
      console.log(action.payload);
      const newPostItem = state.favouritePosts.filter((item) => item.id !== action.payload.id);

      state.favouritePosts = newPostItem;
      toast.success(`${action.payload.name} removed from favourite`, {
        position: 'top-left',
      });

      localStorage.setItem('favourite', JSON.stringify(state.favouritePosts));
    },
  },
});

export const { addFavourite, removeFvouritePost } = favouriteSlice.actions;

export const selectPostFavourite = (state) => state.favourite.favouritePosts;
export const selectTotalFavourite = (state) => state.favourite.totalQuantity;

export default favouriteSlice.reducer;
