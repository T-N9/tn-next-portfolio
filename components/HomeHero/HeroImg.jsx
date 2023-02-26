import React from "react";
import Image from "next/image";

const HeroImg = () => {
  return (
    <>
      <div className="hero_img">
        <div className="image_wrapper">
          <Image
            width={365}
            height={365}
            quality={100}
            className="hero_img--image"
            src="/propic.webp"
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
