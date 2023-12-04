import { createSlice } from '@reduxjs/toolkit'
import {initialState} from './initialState'
import { fetchComments } from './actions'
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchComments.rejected, (state, actions) => {
            state.error = actions.payload
            state.isLoad = false

        })
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoad = true
        })
    },
  
})

export const {} = commentsSlice.actions