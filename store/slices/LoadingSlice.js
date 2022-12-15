import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name : 'loadingState',
    initialState : {
        isLoading :false
    },

    reducers : {
        setStartLoading : (state) => {
            state.isLoading = true
        },
        setStopLoading : (state) => {
            state.isLoading = false
        }
    }
});

export const { setStartLoading, setStopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;