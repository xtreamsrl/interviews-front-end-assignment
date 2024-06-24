import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Cuisine } from '../../utils/types';
import { cuisinesAPI } from './cuisinesAPI';

interface CuisinesState {
  data: Cuisine[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CuisinesState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchCuisines = createAsyncThunk('cuisines/fetchCuisines', async () => {
  const response = await cuisinesAPI();
  return response;
});

const cuisinesSlice = createSlice({
  name: 'cuisines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCuisines.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCuisines.fulfilled, (state, action: PayloadAction<Cuisine[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCuisines.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cuisines';
      });
  },
});

export default cuisinesSlice.reducer;
