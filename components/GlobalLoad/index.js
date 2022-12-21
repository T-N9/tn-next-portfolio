import React from "react";

import Logo from "../Navbar/Logo";

const GlobalLoading = ({ loading, isLogo, isFetching }) => {
  return (
    <div className={loading ? "loading_page visible" : "loading_page hidden"}>
      {isFetching && <i className={`gg-${"spinner"}`}></i>}
      {isLogo && (
        <div className="loading-trans">
          <Logo />
          <div className="loading-line"></div>
        </div>
      )}
    </div>
  );
};

export default GlobalLoading;
