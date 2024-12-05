import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "fetchDAtaREdux/fetchData",
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
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchDAtaReducer.reducer;
