import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    storeProducts(state, action) {
      state.posts = action.payload.posts;
    },
  },
});

export const { storeProducts } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
