import React from "react";
import Link from "next/link";

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
          <p className="description">
            A developer who delivers fast and reliable websites. I care about
            your business values and targeted customers to meet your golden
            goals for tomorrow.
          </p>
        </div>

        <Link href="/about">
          <button
            aria-label="contact tenyain"
            className="hero_txt--btn primary_btn"
          >
            View Works
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroTxt;
