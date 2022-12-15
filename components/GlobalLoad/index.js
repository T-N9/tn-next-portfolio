import React from "react";

const GlobalLoading = ({ loading }) => {
  return (
    <div className={loading ? "loading_page visible" : "loading_page hidden"}>
      <i className={`gg-${"spinner"}`}></i>
    </div>
  );
};

export default GlobalLoading;
