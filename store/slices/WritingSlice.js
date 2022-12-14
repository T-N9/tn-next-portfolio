import { createSlice } from "@reduxjs/toolkit";

export const writingSlice = createSlice({
  name: "writingData",
  initialState: {
    categoryData: [],
    articleData: [],
  },
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = [...action.payload];
    },
    setArticleData : (state, action) => {
      state.articleData = [...action.payload ]
    } 
  },
});

export const { setCategoryData, setArticleData } = writingSlice.actions;
export default writingSlice.reducer;
