import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const moviedetailsbyid = createAsyncThunk(
  "Details/searchById",
  async (id) => {
    console.log("ami action je id paichi : ", id);

    const response = await axios.post(
      `https://orchid-server-xi.vercel.app/detailsMoviebyid/${id}`,
      {}
    );
   
    return response;
  }
);

const DetailsMovie = createSlice({
  name: "Details",
  initialState: {
    data: {},
    status: "idle",
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moviedetailsbyid.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(moviedetailsbyid.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(moviedetailsbyid.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default DetailsMovie.reducer;
