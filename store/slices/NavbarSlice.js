import { createSlice } from "@reduxjs/toolkit";

let themeKey;

if (typeof window !== "undefined") {
  // Perform localStorage action
  themeKey = localStorage.getItem("theme");
}

export const navBarSlice = createSlice({
  name: "navBar",
  initialState: {
    active: false,
    theme: themeKey,
    currentPage: "",
    currentLanguage: "en",
  },
  reducers: {
    setActive: (state) => {
      state.active = !state.active;
    },
    setTheme: (state) => {
      state.theme = !state.theme;
    },
    setCurrentTheme: (state, action) => {
      state.theme = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const {
  setActive,
  setTheme,
  setCurrentTheme,
  setCurrentPage,
  setCurrentLanguage,
} = navBarSlice.actions;
export default navBarSlice.reducer;
