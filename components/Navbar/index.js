import React from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import NavItems from "./NavItems";
import Toggler from "./Toggler";
import MobileMenu from "./MobileMenu";

const LanguageSwitcher = dynamic(() => import('../LanguageSwitcher'),{ ssr: false });

const NavBar = () => {
  return (
    <nav className="nav_com_wrapper">
      <div className="container nav_com">
        <Logo />
        <Hamburger />

        <div className="nav_content hide_on_mobile">
          <NavItems />
          <LanguageSwitcher/>
          <Toggler />
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavBar;
