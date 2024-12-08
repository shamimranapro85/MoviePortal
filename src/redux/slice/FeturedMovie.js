import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const feturedMovie = createAsyncThunk(
  "fetchMovieAllData/feturedMovieGET",
  async () => {
    const response = await fetch(
      "https://orchid-server-xi.vercel.app/feturedMovie"
    );
    console.log(response);
    
    const data = await response.json();

    return data;
  }
);

const furturedMovie = createSlice({
  name: "fetchMovieAllData",
  initialState: {
    data: {},
    status: "idle",
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(feturedMovie.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(feturedMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(feturedMovie.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default furturedMovie.reducer;
