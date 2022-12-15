import { configureStore } from "@reduxjs/toolkit";
import { NavBarReducer, ProjectsReducer, WritingReducer, LoadingReducer } from "./slices";

const store = configureStore({
  reducer: {
    navBar: NavBarReducer,
    projectData: ProjectsReducer,
    writingData : WritingReducer,
    loadingState : LoadingReducer
  },
});

export default store;
