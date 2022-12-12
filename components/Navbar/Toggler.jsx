import React from "react";
import { useTheme } from "next-themes";

import "css.gg/icons/css/sun.css";
import "css.gg/icons/css/moon.css";

const Toggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        aria-label="toggle nav"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="nav_toggler"
      >
        <title>Change Theme</title>

        <span className="moon_icon">
          <i className="gg-moon"></i>
        </span>
        <span className="sun_icon">
          <i className="gg-sun"></i>
        </span>
      </button>
    </>
  );
};

export default Toggler;
