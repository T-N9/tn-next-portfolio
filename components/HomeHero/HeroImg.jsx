import React from "react";
import Image from "next/image";
import heroImg from "../../assets/hero-img.webp";

const HeroImg = () => {
  return (
    <>
      <div className="hero_img">
        <div className="image_wrapper">
          <Image
            width={390}
            height={380}
            quality={100}
            className="hero_img--image"
            src="/hero-img.webp"
            alt="tenyain with a plane"
            priority
          />
          <span className="squares square_1"></span>
          <span className="squares square_2"></span>
          <p className="jp-code">トリウム浜田</p>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
