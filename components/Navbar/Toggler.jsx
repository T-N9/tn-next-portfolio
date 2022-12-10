import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/slices/NavbarSlice";
import "css.gg/icons/css/sun.css";
import "css.gg/icons/css/moon.css";

const Toggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.navBar);
  typeof window !== "undefined" && localStorage.setItem("theme", theme);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    theme ? setIsDarkTheme(true) : setIsDarkTheme(false);
  }, [theme]);

  return (
    <>
      <button
        aria-label="toggle nav"
        onClick={() => dispatch(setTheme())}
        className="nav_toggler"
      >
        <title>Change Theme</title>

        <i className={`gg-${isDarkTheme ? "moon" : "sun"}`}></i>
      </button>
    </>
  );
};

export default Toggler;
