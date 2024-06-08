import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createdNft: null,
  nftLoading: false,
  nftError: null,
  nft: [],
  profile: null,
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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb2hhbiIsInJvbGVzIjpbIlVTRVIiXSwiZXhwIjoxNzE3OTAzMjgwfQ.p7eMM3YLTVFfvaKa1nvu_AYTLK3VmlFObh30snuqRWY`,
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

export const fetchNftInfo = createAsyncThunk(
  "nft/infoNft",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/api/nfts/viewNftById/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchProfileInfo = createAsyncThunk(
  "nft/infoProfile",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/api/users/getProfile/${Number(id)}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const pushNftToMarket = createAsyncThunk(
  "nft/pushToMarket",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_MAIN_URL}/api/nfts/pushNftToMarket?=${id}`
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
  reducers: {
    nft: {},
    createdNfts: [], 
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNft.pending, (state) => {
        state.nftLoading = true;
        state.nftError = null;
      })
      .addCase(createNft.fulfilled, (state, action) => {
        state.nftLoading = false;
        state.createdNfts = action.payload;
      })
      .addCase(createNft.rejected, (state, action) => {
        state.nftLoading = false;
        state.nftError = action.payload || action.payload.error.message;
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
      })

      .addCase(fetchNftInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNftInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.nft = action.payload;
      })
      .addCase(fetchNftInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.nft = {};
      })

      .addCase(fetchProfileInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfileInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfileInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default nftSlice.reducer;
