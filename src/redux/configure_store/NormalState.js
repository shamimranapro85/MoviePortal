import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/normalState";
import fetchData from "../slice/allMovie";
import addmovieReducer from "../slice/addMovie";
import allMovie from "../slice/allMovie";
import feturedMovie from "../slice/FeturedMovie";
import DetailsMovieById from "../slice/DetailsMovieById";

export const store = configureStore({
  reducer: {
    normalState: reducer,
    addMovies: addmovieReducer,
    allMovies: allMovie,
    FeturedMovie: feturedMovie,
    movieDetailByID: DetailsMovieById,
  },
});
