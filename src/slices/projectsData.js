// REDUX
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const GetProjects = createSlice({
  name: "projectsData",
  initialState,
  reducers: {
    GetProjectsData: (state, action) => {
      state.value = action.payload.reverse();
    },
  },
});

// Action creators are generated for each case reducer function
export const { GetProjectsData } = GetProjects.actions;

export default GetProjects.reducer;
