import React from "react";
import { useTheme } from "next-themes";

const ThemeWrapper = (props) => {

  const { theme } = useTheme();

  return (
    <>
        <main
          className={theme === "dark" ? "main_content dark" : "main_content"}
        >
          {props.children}
        </main>
    </>
  );
};

export default ThemeWrapper;
