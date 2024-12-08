import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateMovieData = createAsyncThunk(
  "addMovies/postData",
  async ({ id, data }) => {
    const jsonDAta = await axios.put(
      `https://orchid-server-xi.vercel.app/updatedata/${id}`,
      data
    );
    return jsonDAta;
  }
);

const addMovieREducer = createSlice({
  name: "addMovies",
  initialState: {
    data: ["no movie data"],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UpdateMovieData.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(UpdateMovieData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(UpdateMovieData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default addMovieREducer.reducer;
