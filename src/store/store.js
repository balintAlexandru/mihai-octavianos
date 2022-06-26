import { configureStore } from "@reduxjs/toolkit";
import slice from "../slices/Slice";
import projectDataSlice from "../slices/projectsData";

export const store = configureStore({
  reducer: {
    menuLayout: slice,
    projectsData: projectDataSlice,
  },
});
