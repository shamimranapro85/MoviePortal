import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  data: ["sahmim"],
  user: null,
};

const normalStateManage = createSlice({
  name: "normalUsesState",
  initialState,
  reducers: {
    changeName: (state) => {
      state.data[0] = "Shamim Rana";
    },
    userState: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { changeName, userState } = normalStateManage.actions;
export default normalStateManage.reducer;
