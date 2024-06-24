import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Diet } from '../../utils/types';
import { dietsAPI } from './dietsAPI';

interface DietsState {
  data: Diet[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DietsState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchDiets = createAsyncThunk('diets/fetchDiets', async () => {
  const response = await dietsAPI();
  return response;
});

const dietsSlice = createSlice({
  name: 'diets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDiets.fulfilled, (state, action: PayloadAction<Diet[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDiets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch diets';
      });
  },
});

export default dietsSlice.reducer;
