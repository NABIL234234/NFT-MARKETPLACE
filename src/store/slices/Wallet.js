import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  walletLoading: false,
  wallet: null,
  walletError: null,

  bankCardLoading: false,
  bankCard: null,
  bankCardError: null,
};

const BearerToken = `Bearer ${localStorage.getItem("accessToken")}`;

export const MetaMaskWallet = createAsyncThunk(
  "wallet/MetaMaskWallet",
  async ({ walletAddress, walletPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_MAIN_URL}/api/users/addMetaMaskWallet?walletAddress=${walletAddress}&walletPassword=${walletPassword}`,
        {},
        {
          headers: {
            Authorization: BearerToken,
          },
        }
      );


        if (response.data.statusCode === 404) {
          return rejectWithValue(response.data.message);
        }
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return rejectWithValue('Incorrect wallet details provided');
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const addBankCard = createAsyncThunk(
  "wallet/addBankCard",
  async ({ cardNumber, cardExpiryDate, cvv }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_MAIN_URL}/api/users/addBankCard`,
        { cardNumber, cardExpiryDate, cvv },
        {
          headers: {
            Authorization: BearerToken,
          },
        }
      );
      
      if (response.data.statusCode === 404) {
        return rejectWithValue(response.data.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const WalletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(MetaMaskWallet.pending, (state) => {
      state.walletLoading = true;
      state.walletError = null;
    })
    .addCase(MetaMaskWallet.fulfilled, (state,action) => {
      state.walletLoading = false;
      state.wallet =  action.payload.data;
    })
    .addCase(MetaMaskWallet.rejected, (state,action) => {
      state.walletLoading = false;
      state.walletError = action.payload || action.error.message;;
    })
    .addCase(addBankCard.pending, (state) => {
      state.bankCardLoading = true;
      state.bankCardError = null;
    })
    .addCase(addBankCard.fulfilled, (state,action) => {
      state.bankCardLoading = false;
      state.bankCard =  action.payload.data;
    })
    .addCase(addBankCard.rejected, (state,action) => {
      state.bankCardLoading = false;
      state.bankCardError = action.payload || action.error.message;;
    })
  },
});



export default WalletSlice.reducer;