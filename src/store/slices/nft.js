import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createdNft: null,
  nftLoading: false,
  nftError: null,
  nft: null,
  profile: null,
  loading: false,
  error: null,
  pushToMarket: null,
  pushLoading: false,
  pushError: null,
  createdNfts: [],
  nftsForSale: [],
  changeAvatar: null,
  avatarLoading: false,
  avatarError: null,
  deletedNft: null,
  deletedNftLoading: false,
  deletedError: null,
  cancelSelling: null,
  cancelLoading: false,
  cancelError: null,
  transactions: null,
  transactionsLoading: false,
  transactionsError: null,
};

const BearerToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb2hhbiIsInJvbGVzIjpbIlVTRVIiXSwiZXhwIjoxNzE4NjI2ODc2fQ.cil4V6woYZCel1ccg8Bw-_H368FfA_KkKvF_wdZipTo`;

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
            Authorization: BearerToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchNftsForSale = createAsyncThunk(
  "nft/nftsForSale",
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
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteNft = createAsyncThunk(
  "nft/deleteNft",
  async (nftId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_MAIN_URL}/api/nfts/${nftId}`,
        {
          headers: {
            Authorization: BearerToken,
          },
        }
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changeProfilePhoto = createAsyncThunk(
  "nft/changePhoto",
  async (photoData, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_MAIN_URL}/api/users/changeProfilePhoto`,
        photoData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: BearerToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const pushNftToMarket = createAsyncThunk(
  "nft/pushToMarket",
  async (nftId, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_MAIN_URL
        }/api/nfts/pushNftToMarket?nftId=${nftId}`,
        {},
        {
          headers: {
            Authorization: BearerToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const cancelSelling = createAsyncThunk(
  "nft/cancelSelling",
  async (nftId, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_MAIN_URL
        }/api/nfts/cancelSelling?nftId=${nftId}`,
        {},
        {
          headers: {
            Authorization: BearerToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const transactions = createAsyncThunk(
  "nft/transactions",
  async ({ nftId, meansOfPayment }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/api/transactions?nftId=${nftId}&meansOfPayment=${meansOfPayment}`,
        {},
        {
          headers: {
            Authorization: BearerToken,
          },
        }
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
        state.createdNfts.push(action.payload);
      })
      .addCase(createNft.rejected, (state, action) => {
        state.nftLoading = false;
        state.nftError = action.payload || action.error.message;
      })

      .addCase(fetchNftsForSale.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNftsForSale.fulfilled, (state, action) => {
        state.loading = false;
        state.nftsForSale = action.payload;
      })
      .addCase(fetchNftsForSale.rejected, (state, action) => {
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
        state.nft = null;
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
      })

      .addCase(pushNftToMarket.pending, (state) => {
        state.pushLoading = true;
        state.pushError = null;
      })
      .addCase(pushNftToMarket.fulfilled, (state, action) => {
        state.pushLoading = false;
        state.pushToMarket = action.payload;
      })
      .addCase(pushNftToMarket.rejected, (state, action) => {
        state.pushLoading = false;
        state.pushError = action.payload || action.error.message;
      })

      .addCase(deleteNft.pending, (state) => {
        state.deletedNftLoading = true;
        state.deletedError = null;
      })
      .addCase(deleteNft.fulfilled, (state, action) => {
        state.deletedNftLoading = false;
        state.deletedNft = action.payload;
      })
      .addCase(deleteNft.rejected, (state, action) => {
        state.deletedNftLoading = false;
        state.deletedError = action.payload || action.payload.error.message;
      })

      .addCase(cancelSelling.pending, (state) => {
        state.cancelLoading = true;
        state.cancelError = null;
      })
      .addCase(cancelSelling.fulfilled, (state, action) => {
        state.cancelLoading = false;
        state.cancelSelling = action.payload;
      })
      .addCase(cancelSelling.rejected, (state, action) => {
        state.cancelLoading = false;
        state.cancelError = action.payload || action.error.message;
      })

      .addCase(transactions.pending, (state) => {
        state.transactionsLoading = true;
        state.transactionsError = null;
      })
      .addCase(transactions.fulfilled, (state, action) => {
        state.transactionsLoading = false;
        state.transactions = action.payload;
      })
      .addCase(transactions.rejected, (state, action) => {
        state.transactionsLoading = false;
        state.transactionsError = action.payload || action.error.message;
      });
  },
});

export default nftSlice.reducer;
