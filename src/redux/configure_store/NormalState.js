import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/normalState";
import fetchData from "../slice/fetchDAta"
export const store = configureStore({
  reducer: {
    normalState: reducer,
    fetchDAtaREdux : fetchData
   
  },
});
