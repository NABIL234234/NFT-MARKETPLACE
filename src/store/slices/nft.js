import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createdNft: null,
  nftLoading: false,
  nftError: null,
  nft: [],
  loading: false,
  error: null,
};

export const createNft = createAsyncThunk(
  "nft/createNft",
  async (nftData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/api/nfts`,
        nftData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb2hhbiIsInJvbGVzIjpbIlVTRVIiXSwiZXhwIjoxNzE3NDM4NjUyfQ.bKY36Z852PcsFJ9jqZPIEwzEZShxiv5WIxsG1aTgza4`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const fetchAllNfts = createAsyncThunk(
  "nft/allNft",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/api/nfts/forSale`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const nftSlice = createSlice({
  name: "nft",
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
      })

      .addCase(fetchAllNfts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNfts.fulfilled, (state, action) => {
        state.loading = false;
        state.nft = action.payload;
      })
      .addCase(fetchAllNfts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default nftSlice.reducer;
