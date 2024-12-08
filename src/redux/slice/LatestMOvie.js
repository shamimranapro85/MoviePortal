import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const LatestMovie = createAsyncThunk(
  "LatestMovie/feturedMovieGET",
  async () => {
    const response = await fetch(
      "https://orchid-server-xi.vercel.app/Latest"
    );
    console.log(response);
    
    const data = await response.json();

    return data;
  }
);

const fetchDAtaReducer = createSlice({
  name: "LatestMovie",
  initialState: {
    data: {},
    status: "idle",
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LatestMovie.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(LatestMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(LatestMovie.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchDAtaReducer.reducer;
