import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AllMOvie = createAsyncThunk(
  "fetchMovieAllData/allMovieGET",
  async () => {
    const response = await fetch(
      "https://orchid-server-xi.vercel.app/allmovie"
    );
    const data = await response.json();
    
    return data;
  }
);

const fetchDAtaReducer = createSlice({
  name: "fetchMovieAllData",
  initialState: {
    data: {},
    status: "idle",
    error: null,
    loading: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllMOvie.pending, (state) => {
        state.status = "loading";
        state.loading = true
      })
      .addCase(AllMOvie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false
      })
      .addCase(AllMOvie.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false
        state.error = action.error.message;
      });
  },
});

export default fetchDAtaReducer.reducer;
