import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTheme } from "../store/slices/NavbarSlice";

const ThemeWrapper = (props) => {
  /* Handling Theme */
  const { theme } = useSelector((state) => state.navBar);
  const localStorageKey = "theme";
  const dispatch = useDispatch();

  useEffect(() => {
    let persistedTheme = localStorage.getItem(localStorageKey);
    console.log({ persistedTheme });
    if (persistedTheme === "null") {
      localStorage.setItem(localStorageKey, false);
      persistedTheme = localStorage.getItem(localStorageKey) && false;
    } else if (persistedTheme === "true") {
      persistedTheme = true;
    } else if (persistedTheme === "false") {
      persistedTheme = false;
    }

    dispatch(setCurrentTheme(persistedTheme));
  }, []);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    theme ? setIsDarkTheme(true) : setIsDarkTheme(false);
  }, [theme]);

  return (
    <>
      <main className={isDarkTheme ? "main_content dark" : "main_content"}>
        {props.children}
      </main>
    </>
  );
};

export default ThemeWrapper;
