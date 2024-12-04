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
    checkingUser: (state, actions) => {
      console.log(actions.payload);
    },
  },
});

export const { changeName, checkingUser } = normalStateManage.actions;
export default normalStateManage.reducer;
