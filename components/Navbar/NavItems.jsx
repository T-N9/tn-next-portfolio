import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import pages from "../../constants/pages";

const NavItems = () => {
  const { currentPage } = useSelector((state) => state.navBar);

  return (
    <>
      <ul className="nav_items">
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={`nav_item link_hover ${
                currentPage === page.name && "ht_text"
              }`}
            >
              <Link href={page.route}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItems;
