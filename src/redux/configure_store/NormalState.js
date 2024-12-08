import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/normalState";
import fetchData from "../slice/allMovie";
import addmovieReducer from "../slice/addMovie";
import allMovie from "../slice/allMovie";
import feturedMovie from "../slice/FeturedMovie";
import DetailsMovieById from "../slice/DetailsMovieById";
import addFavMovies from "../slice/addFavMovie";
import getFAvMovis from "../slice/getFAvMovie";
import deleFAvritMOvie from "../slice/deleteFAvmovie";
import UpdateMovies from "../slice/UpdateData";
import LatestMM from "../slice/LatestMOvie";

export const store = configureStore({
  reducer: {
    normalState: reducer,
    addMovies: addmovieReducer,
    allMovies: allMovie,
    FeturedMovie: feturedMovie,
    movieDetailByID: DetailsMovieById,
    addfavmovoie: addFavMovies,
    getfavmovie: getFAvMovis,
    deleteFAvemovie : deleFAvritMOvie,
    updateMovie: UpdateMovies,
    LatestMOvied : LatestMM
  },
});
