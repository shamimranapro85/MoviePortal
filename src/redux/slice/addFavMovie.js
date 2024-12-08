import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addFavMovie = createAsyncThunk("addFavMovie/postData", async (data) => {
  const jsonDAta = await axios.post(
    "https://orchid-server-xi.vercel.app/favmovie",
    data
  );
  return jsonDAta;
});

const addMovieREducer = createSlice({
  name: "addFavMovie",
  initialState: {
    data: ["no movie data"],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavMovie.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(addFavMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addFavMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default addMovieREducer.reducer;
