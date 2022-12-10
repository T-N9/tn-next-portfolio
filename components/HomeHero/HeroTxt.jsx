import React from "react";
import { Link } from "react-router-dom";

const HeroTxt = () => {
  return (
    <>
      <div className="hero_txt">
        <div className="content">
          <p className="intro">
            Hello there, I am <span className="ht_text">TeNyain</span>
          </p>
          <h1 className="hero_txt--text">
            <span className="ht_text">Front-end </span> Developer
          </h1>
          {/* <h1 className="hero_txt--text">
                    Hello there, <br className="hide_on_desktop"/> I am <span className="ht_text">TeNyain</span>, <br className="hide_on_mobile"/>
                    a <span className="ht_text">front-end</span> developer who
                    delivers <span className="ht_text">fast and reliable</span> websites.
                    </h1> */}
          <p className="description">
            A developer who delivers fast and reliable websites. I care about
            your business values and targeted customers to meet your golden
            goals for tomorrow.
          </p>
        </div>

        <Link to="/about">
          <button
            aria-label="contact tenyain"
            className="hero_txt--btn primary_btn"
          >
            About Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroTxt;
