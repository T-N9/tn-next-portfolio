import React from "react";
import Bricks from "./Bricks";
import { useTranslation } from "react-i18next";

const HomeMotto = () => {
  const { t } = useTranslation();
  return (
    <section className="motto_page_wrapper">
      <div className="motto_page">
        <h1>
          “ {t('motto')} “
        </h1>

        <div className="bricks">
          <Bricks />
        </div>
      </div>
    </section>
  );
};

export default HomeMotto;
