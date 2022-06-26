// REDUX
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  skipValue: false,
};

export const GetProjects = createSlice({
  name: "projectsData",
  initialState,
  reducers: {
    GetProjectsData: (state, action) => {
      state.value = action.payload.reverse();
    },
    handleSkipButton: (state, action) => {
      action.payload === "project"
        ? (state.skipValue = true)
        : (state.skipValue = false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { GetProjectsData, handleSkipButton } = GetProjects.actions;

export default GetProjects.reducer;
