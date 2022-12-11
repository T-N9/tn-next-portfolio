import React from "react";
import "css.gg/icons/css/arrow-down.css";

import * as Scroll from "react-scroll";

var ScrollLink = Scroll.Link;

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

          <ScrollLink
            to={"projects_section"}
            spy={true}
            duration={100}
            smooth={"linear"}
          >
            <button className="downToContent">
              <i className={`gg-${"arrow-down"}`}></i>
            </button>
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
