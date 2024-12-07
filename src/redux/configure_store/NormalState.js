import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/normalState";
import fetchData from "../slice/allMovie";
import addmovieReducer from "../slice/addMovie"
import allMovie from "../slice/allMovie"

export const store = configureStore({
  reducer: {
    normalState: reducer,
    addMovies : addmovieReducer,
    allMovies : allMovie

  },
});
