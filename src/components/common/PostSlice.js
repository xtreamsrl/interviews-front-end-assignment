import { createSlice } from "@reduxjs/toolkit";
import PostStorage from "../../Arrays/Postsarray";

const initialState = PostStorage

const PostSlice = createSlice({
  name: 'posts',
  initialState: {posts: PostStorage},
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, title, body } = action.payload
      const existingPost = state.posts.find(post => post.id === parseInt(id))      
      if(existingPost) {
        existingPost.title = title
        existingPost.body = body
      }      
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter(post => post.id != parseInt(id))      
    }
  }
});

export const { addPost, editPost, deletePost } = PostSlice.actions
export default PostSlice.reducer
