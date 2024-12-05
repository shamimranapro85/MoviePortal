import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/normalState";
export const store = configureStore({
  reducer: {
    normalState: reducer,
   
  },
});
