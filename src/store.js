import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './components/common/PostSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
})

