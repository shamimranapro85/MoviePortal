import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addmovie = createAsyncThunk("addMovies/postData", async (data) => {
  const jsonDAta = await axios.post(
    "https://orchid-server-xi.vercel.app/addmovie",
    data
  );
  return jsonDAta;
});

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
      .addCase(addmovie.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(addmovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addmovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default addMovieREducer.reducer;
