import React from "react";

const ThemeWrapper = (props) => {
  return (
    <>
      <main className="main_content">{props.children}</main>
    </>
  );
};

export default ThemeWrapper;
