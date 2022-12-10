import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Hamburger from "./Hamburger";
import Toggler from "./Toggler";
import { setActive } from "../../redux/slices/NavbarSlice";

const pages = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Works",
    route: "/works",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { active, currentPage } = useSelector((state) => state.navBar);
  const toggleClick = () => {
    dispatch(setActive());
  };

  return (
    <>
      <section
        className={active ? "nav_mobile_wrapper active" : "nav_mobile_wrapper"}
      >
        <Hamburger />
        <ul className="nav_mobile_items">
          {pages.map((page, index) => {
            return (
              <li
                onClick={toggleClick}
                key={index}
                className={`nav_item link_hover ${
                  currentPage === page.name && "ht_text"
                }`}
              >
                <Link to={page.route}>{page.name}</Link>
              </li>
            );
          })}
        </ul>

        <Toggler />
        <div className="separator nav_separator"></div>
        <div className="mail_div">
          <a href="mailto:tenyainmoelwin@gmail.com">
            <button className="secondary_btn">Mail Me</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default MobileMenu;
