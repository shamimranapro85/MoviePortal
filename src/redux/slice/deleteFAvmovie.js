import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteFavmovie = createAsyncThunk("DeleteFAvMovie/postData", async (data) => {
  const jsonDAta = await axios.delete(
    `https://orchid-server-xi.vercel.app/favmovie/${data}`
  );
  return jsonDAta;
});

const DeleteFAvMovie = createSlice({
  name: "DeleteFAvMovie",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteFavmovie.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(deleteFavmovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteFavmovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default DeleteFAvMovie.reducer;
