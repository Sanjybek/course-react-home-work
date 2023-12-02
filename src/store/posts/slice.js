import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, actions) => {
            state.posts.push(actions.payload)
        }
    },
})
  
export const { addPosts } = postsSlice.actions
  