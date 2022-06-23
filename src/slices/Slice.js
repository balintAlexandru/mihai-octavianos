// REDUX
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const showMenuLayout = createSlice({
  name: "menuLayout",
  initialState,
  reducers: {
    menuLayoutState: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuLayoutState } = showMenuLayout.actions;

export default showMenuLayout.reducer;
