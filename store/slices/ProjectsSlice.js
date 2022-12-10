import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projectData",
  initialState: {
    contentData: [],
  },
  reducers: {
    setProjectData: (state, action) => {
      state.contentData = [...action.payload];
    },
  },
});

export const { setProjectData } = projectsSlice.actions;
export default projectsSlice.reducer;
