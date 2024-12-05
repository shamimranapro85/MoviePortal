import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
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
      state.loading = false
    },
  },
});

export const { changeName, userState,loaded } = normalStateManage.actions;
export default normalStateManage.reducer;
