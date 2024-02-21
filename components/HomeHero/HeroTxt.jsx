import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import { useTranslation } from "next-i18next";
import {
  Github,
  Linkedin,
  Medium,
  Gmail,
  Mastodon,
} from "@icons-pack/react-simple-icons";

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

        <div className="action_wrapper">
          <a href="#portfolio" aria-label="View Works">
            <button
              type="button"
              className="hero_txt--btn primary_btn"
              aria-label="View Works"
            >
              {t("view_works")}
            </button>
          </a>
          <div className="icon_banner">
            <a href="https://github.com/T-N9" target="_blank" rel="noreferrer">
              <Github xlinkTitle="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin xlinkTitle="true" />
            </a>
            <a href="mailto:tenyainmoelwin@gmail.com">
              <Gmail xlinkTitle="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTxt;
