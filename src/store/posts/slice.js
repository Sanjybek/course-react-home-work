import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { fetchPosts } from './actions'

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, actions) => {
            state.posts.push(actions.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, actions) => {
            state.posts = actions.payload
            state.isLoad = false
        })
        builder.addCase(fetchPosts.rejected, (state, actions) => {
            state.error = actions.payload
            state.isLoad = false

        })
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoad = true
        })

    }
})
  
export const { addPosts } = postsSlice.actions
  