import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


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

const NavItems = () => {
  const { currentPage } = useSelector((state) => state.navBar);

  return (
    <>
      <ul className="nav_items">
        {pages.map((page, index) => {
          return (
            <li key={index} className={`nav_item link_hover ${currentPage === page.name && 'ht_text'}`}>
              <Link to={page.route}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItems;
