import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  posts: localStorage.getItem('allPosts') ? JSON.parse(localStorage.getItem('allPosts')) : [],
  favouritePosts: localStorage.getItem('favourite')
    ? JSON.parse(localStorage.getItem('favourite'))
    : [],
  totalQuantity: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0,
};

const slicePost = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd(state, action) {
      const newPost = action.payload;

      state.posts.unshift({
        id: nanoid(),
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId,
        comment: newPost.comment || 'No comment',
      });

      localStorage.setItem('allPosts', JSON.stringify(state.posts));
    },

    editPost(state, action) {
      const { id, title, body } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
      localStorage.setItem('allPosts', JSON.stringify(state.posts));
    },

    deletPost(state, action) {
      const id = action.payload;
      const existingitem = state.posts.find((post) => post.id === id);
      if (existingitem) {
        state.posts = state.posts.filter((post) => post.id !== id);
        // state.totalQuantity--;
      }
      localStorage.setItem('allPosts', JSON.stringify(state.posts));
    },

    addPostToFavourite(state, action) {
      const newItem = action.payload;
      const existingitem = state.favouritePosts.find((post) => post.id === newItem.id);

      if (!existingitem) {
        state.totalQuantity++;

        state.favouritePosts.push({
          id: newItem.id,
          title: newItem.title,
          body: newItem.body,
          userId: newItem.userId,
        });
      } else {
        return;
      }

      localStorage.setItem('favourite', JSON.stringify(state.favouritePosts));
      localStorage.setItem('total', JSON.stringify(state.totalQuantity));
    },

    deleteFavouritePost(state, action) {
      const id = action.payload;
      const existingitem = state.favouritePosts.find((post) => post.id === id);
      if (existingitem) {
        state.favouritePosts = state.favouritePosts.filter((post) => post.id !== id);
        state.totalQuantity--;
      }
      localStorage.setItem('favourite', JSON.stringify(state.favouritePosts));
      localStorage.setItem('total', JSON.stringify(state.totalQuantity));
    },
  },
});

export const postAction = slicePost.actions;

export const selectPost = (state) => state.post.posts;

export const selectFavouritePosts = (state) => state.post.favouritePosts;

export const selectTotalQuantity = (state) => state.post.totalQuantity;

export default slicePost.reducer;
