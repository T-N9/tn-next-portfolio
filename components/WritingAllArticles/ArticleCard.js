import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../client";
import Link from "next/link";

const ArticleCard = ({ data }) => {
  const titleImgProps = useNextSanityImage(client, data.titleImage);
  return (
    <Link href={`writing/articles/`}>
      <div className="article_card">
        <Image
          {...titleImgProps}
          style={{ maxWidth: "100%", height: "auto" }}
          quality={80}
          alt="Post Image"
        />
        <div className="article_card--content">
          <h1 className="ht_text">{data.title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;