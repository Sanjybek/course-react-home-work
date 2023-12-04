import { configureStore } from '@reduxjs/toolkit'
import { postsSlice } from './posts/slice'
import { commentsSlice } from './comments/slice'
import { albumsSlice } from './Albums/slice'
import { todosSlice } from './todos/slice'
export const store = configureStore({
  reducer: {
    postsReducer: postsSlice.reducer,
    commentsReducer: commentsSlice.reducer,
    albumsReducer: albumsSlice.reducer,
    todosReducer: todosSlice.reducer
  },
})