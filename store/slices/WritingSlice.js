import { createSlice } from "@reduxjs/toolkit";

export const writingSlice = createSlice({
    name : writingData,
    initialState : {
        categories : [],
        articles : [],
    },
    reducers : {
        setCategoryData : (state, action) => {
            state.categories = [...action.payload]
        }
    }
});

export const { setCategoryData } = writingSlice.actions;
export default writingSlice.reducer;