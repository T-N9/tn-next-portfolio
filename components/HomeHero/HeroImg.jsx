import React from "react";
import Image from "next/image";

const HeroImg = () => {
  return (
    <>
      <div className="hero_img">
        <div className="image_wrapper">
          <Image
            width={365}
            height={442}
            quality={100}
            className="hero_img--image"
            src="/content/profile.webp"
            alt="tenyain moe lwin with laptop"
            priority
          />
          {/* <span className="squares square_1"></span>
          <span className="squares square_2"></span> */}
          <p className="jp-code">トリウム浜田</p>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
