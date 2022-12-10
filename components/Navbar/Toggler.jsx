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

        <i className={`gg-${theme === "dark" ? "moon" : "sun"}`}></i>
      </button>
    </>
  );
};

export default Toggler;
