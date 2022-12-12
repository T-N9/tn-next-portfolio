import React from "react";
import { useTheme } from "next-themes";

const ThemeWrapper = (props) => {
  const { theme } = useTheme();
  console.log(theme === "dark");

  return (
    <>
      <main className="main_content">{props.children}</main>
    </>
  );
};

export default ThemeWrapper;
