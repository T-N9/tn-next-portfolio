import React from "react";

import Logo from "../Navbar/Logo";

const GlobalLoading = ({ loading, isLogo, isFetching }) => {
  return (
    <div className={loading ? "loading_page visible" : "loading_page hidden"}>
      {isFetching && <i className={`gg-${"spinner"}`}></i>
}
      {isLogo && <Logo />}
    </div>
  );
};

export default GlobalLoading;
