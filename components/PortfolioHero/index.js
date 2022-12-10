import React from "react";
import "css.gg/icons/css/arrow-down.css";

const PortfolioHero = () => {
  return (
    <>
      <div className="hero_portfolio">
        <div className="flex_auto gradient_bg_transparent">
          <div>
            <h1 style={{ marginBottom: "1rem" }} className="title_text ht_text">
              My Works
            </h1>
            <h1 className="hero_txt">
              The followings are my practical
              <br className="hide_on_mobile" /> and personal projects.
            </h1>
          </div>

          <a href="#projects">
            <button className="downToContent">
              <i className={`gg-${"arrow-down"}`}></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
