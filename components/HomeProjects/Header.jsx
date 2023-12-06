import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="portfolio--header container_sm">
        <h1 className="title_text">{t("projects")}</h1>

        <Link href="/works">
          <button className="header_btn link_hover">{t("view_all_works")} &gt;</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
