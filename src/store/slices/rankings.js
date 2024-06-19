import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rankLoading: false,
  rank: null,
  rankError: null,
};

const BearerToken = `Bearer ${localStorage.getItem("accessToken")}`;

export const fetchUsersRank = createAsyncThunk(
  "rank/fetchUsersRank",
  async ({ days }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/api/users/rateOfUsersByDays`,
        {
          params: { days },
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

export const fetchUserRank = createAsyncThunk(
  "rank/fetchUserRank",
  async ({ days }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/api/users/rateOfUsersByDays`,
        {
          params: { days },
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

const rankingsSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersRank.pending, (state) => {
        state.rankLoading = true;
        state.rankError = null;
      })
      .addCase(fetchUsersRank.fulfilled, (state, action) => {
        state.rankLoading = false;
        state.rank = action.payload.data || []; // Set rank to data or an empty array
      })
      .addCase(fetchUsersRank.rejected, (state, action) => {
        state.rankLoading = false;
        state.rankError = action.payload || action.error.message;
      })

      .addCase(fetchUserRank.pending, (state) => {
        state.rankLoading = true;
        state.rankError = null;
      })
      .addCase(fetchUserRank.fulfilled, (state, action) => {
        state.rankLoading = false;
        state.rank = action.payload.data || []; // Set rank to data or an empty array
      })
      .addCase(fetchUserRank.rejected, (state, action) => {
        state.rankLoading = false;
        state.rankError = action.payload || action.error.message;
      });
  },
});

export default rankingsSlice.reducer;
