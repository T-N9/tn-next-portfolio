import React from "react";
import Header from "./Header";
import SwiperCards from "./SwiperCards";
import OneByOneCards from "./OneByOneCards";

const HomeProject = () => {
  return (
    <div id="portfolio">
      <section className="portfolio_page_wrapper">
        <div className="portfolio_page">
          <Header />
          <span className="hide_on_desktop">
            <SwiperCards />
          </span>
          <span className="hide_on_mobile">
            <OneByOneCards />
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomeProject;
