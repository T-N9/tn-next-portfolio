import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import pages from "../../constants/pages";
import { useTranslation } from "react-i18next";

const NavItems = () => {
  const { currentPage } = useSelector((state) => state.navBar);
  const { t } = useTranslation();

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
              {page.name === "Writing" ? (
                <a href={page.route}>{t(page.name)}</a>
              ) : (
                <Link href={page.route}>{t(page.name)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItems;
