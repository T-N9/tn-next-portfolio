import React, { useEffect } from "react";
import * as Scroll from "react-scroll";

var ScrollLink = Scroll.Link;
var scrollSpy = Scroll.scrollSpy;

const HeroTxt = () => {
  useEffect(() => {
    scrollSpy.update();
  });
  return (
    <>
      <div className="hero_txt">
        <div className="content">
          <p className="intro">
            Hello there, I am <span className="ht_text">Te Nyain</span>
          </p>
          <h1 className="hero_txt--text">
            <span className="ht_text">Front-end </span> Developer
          </h1>
          <p className="description">
            A developer who delivers fast and reliable websites. I care about
            your business values and targeted customers to meet your golden
            goals for tomorrow.
          </p>
        </div>

        <a href="#portfolio">
          <button
            aria-label="contact tenyain"
            className="hero_txt--btn primary_btn"
          >
            View Works
          </button>
        </a>
      </div>
    </>
  );
};

export default HeroTxt;
