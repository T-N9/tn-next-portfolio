import { configureStore } from "@reduxjs/toolkit";
import { NavBarReducer, ProjectsReducer, WritingReducer } from "./slices";

const store = configureStore({
  reducer: {
    navBar: NavBarReducer,
    projectData: ProjectsReducer,
    writingData : WritingReducer
  },
});

export default store;
