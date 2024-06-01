// slices/nftSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  createdNft: null,
  nftLoading: false,
  nftError: null,
};

export const createNft = createAsyncThunk(
  'nft/createNft',
  async (nftData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_MAIN_URL}/api/nfts`, nftData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb2hhbiIsInJvbGVzIjpbIlVTRVIiXSwiaXNzIjoiaHR0cHM6Ly9uZnQtbWFya2V0LXBsYWNlLWYtMjMtYzZhNWVlOGY1MThkLmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiZXhwIjoxNzE3MTcwNDExfQ.kRqNL0TuAtViS1fQecEt8Ib9LnrOJPrdTcyK3zSlc7U`  
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNft.pending, (state) => {
        state.nftLoading = true;
        state.nftError = null;
      })
      .addCase(createNft.fulfilled, (state, action) => {
        state.nftLoading = false;
        state.createdNft = action.payload;
      })
      .addCase(createNft.rejected, (state, action) => {
        state.nftLoading = false;
        state.nftError = action.payload || action.error.message;
      });
  },
});

export default nftSlice.reducer;
