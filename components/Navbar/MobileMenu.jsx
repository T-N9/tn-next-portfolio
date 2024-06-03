import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Hamburger from "./Hamburger";
import Toggler from "./Toggler";
import { setActive } from "../../store/slices/NavbarSlice";
import pages from "../../constants/pages";
import { useTranslation } from "react-i18next";
const LanguageSwitcher = dynamic(() => import("../LanguageSwitcher"), {
  ssr: false,
});

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { active, currentPage } = useSelector((state) => state.navBar);
  const toggleClick = () => {
    dispatch(setActive());
  };

  const { t } = useTranslation();

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
                {page.name === "Writing" ? (
                  <a href={page.route}>{t(page.name)}</a>
                ) : (
                  <Link href={page.route}>{t(page.name)}</Link>
                )}
              </li>
            );
          })}
        </ul>

        <LanguageSwitcher />

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
