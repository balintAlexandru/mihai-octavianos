// REDUX
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  blur:0,
};

export const GetProjects = createSlice({
  name: "projectsData",
  initialState,
  reducers: {
    GetProjectsData: (state, action) => {
      state.value = action.payload.reverse();
    },
    isBlur: (state, action) => {
      state.blur = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { GetProjectsData, isBlur } = GetProjects.actions;

export default GetProjects.reducer;
