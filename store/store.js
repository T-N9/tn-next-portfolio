import { configureStore } from "@reduxjs/toolkit";
import { NavBarReducer, ProjectsReducer } from "./slices";

const store = configureStore({
  reducer: {
    navBar: NavBarReducer,
    projectData: ProjectsReducer,
  },
});

export default store;
