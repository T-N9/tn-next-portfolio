import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ServiceIntro = () => {
  const { t } = useTranslation();
  return (
    <section className="service_intro">
      {/* <p>{t("skill_description")}</p> */}

      <Link href={"/services"}>
        <button className="primary_btn">{t("view_services")}</button>
      </Link>
    </section>
  );
};

export default ServiceIntro;
