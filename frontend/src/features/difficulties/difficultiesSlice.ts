import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Difficulty } from '../../utils/types';
import { difficultiesAPI } from './difficultiesAPI';

interface DifficultiesState {
  data: Difficulty[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DifficultiesState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchDifficulties = createAsyncThunk('difficulties/fetchDifficulties', async () => {
  const response = await difficultiesAPI();
  return response;
});

const difficultiesSlice = createSlice({
  name: 'difficulties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDifficulties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDifficulties.fulfilled, (state, action: PayloadAction<Difficulty[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDifficulties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch difficulties';
      });
  },
});

export default difficultiesSlice.reducer;
