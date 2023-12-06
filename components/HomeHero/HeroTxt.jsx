import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import { useTranslation } from "next-i18next";

var scrollSpy = Scroll.scrollSpy;

const HeroTxt = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on the client side
      scrollSpy.update();
    }
  });

  const { t } = useTranslation();
  return (
    <>
      <div className="hero_txt">
        <div className="content">
          <p className="intro">
            {t("home_line_1")}{" "}
            <span className="ht_text">{t("first_name")}</span>
          </p>
          <h1 className="hero_txt--text">
            <span className="ht_text">{t("frontend")} </span> {t("developer")}
          </h1>
          <p className="description">{t("home_description")}</p>
        </div>

        <a href="#portfolio" aria-label="View Works">
          <button
            type="button"
            className="hero_txt--btn primary_btn"
            aria-label="View Works"
          >
            {t("view_works")}
          </button>
        </a>
      </div>
    </>
  );
};

export default HeroTxt;
