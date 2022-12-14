import { createSlice } from "@reduxjs/toolkit";

export const writingSlice = createSlice({
  name: "writingData",
  initialState: {
    categoryData: [],
    articles: [],
  },
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = [...action.payload];
    },
  },
});

export const { setCategoryData } = writingSlice.actions;
export default writingSlice.reducer;
