import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFAvMovie = createAsyncThunk("addFavMovie/postData", async (data) => {
  const jsonDAta = await axios.get(
    `https://orchid-server-xi.vercel.app/favmovie/${data}`
  );
  return jsonDAta.data;
});

const addMovieREducer = createSlice({
  name: "addFavMovie",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFAvMovie.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getFAvMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getFAvMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default addMovieREducer.reducer;
