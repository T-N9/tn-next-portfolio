import React from "react";
import Header from "./Header";
import SwiperCards from "./SwiperCards";

const HomeProject = () => {
  return (
    <div id="portfolio">
      <section className="portfolio_page_wrapper">
        <div className="portfolio_page">
          <Header />
          <SwiperCards />
        </div>
      </section>
    </div>
  );
};

export default HomeProject;
