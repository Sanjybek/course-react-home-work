import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../api'
export const fetchTodos = createAsyncThunk(
    'photos/fetchTodos',
    async (_, thunkAPI) => {
      try {
        const response = await API.get('/todos')
        return response.data
      } catch (e) {
        return thunkAPI.rejectWithValue('error')
      }
    }
)
