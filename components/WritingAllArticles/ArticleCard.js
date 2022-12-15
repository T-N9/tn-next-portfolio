import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../client";

const ArticleCard = ({ data }) => {
  const { categoryData } = useSelector((state) => state.writingData);

  const titleImgProps = useNextSanityImage(client, data.titleImage);

  return (
    <div className="article_card">
      <Image
        {...titleImgProps}
        style={{ maxWidth: "100%", height: "auto" }}
        quality={80}
        alt="Post Image"
      />
      <div className="article_card--content">
        <p className="created_date">
          {moment(data._createdAt).format("MMMM Do YYYY")}
        </p>

        <h1 className="ht_text">{data.title}</h1>

        <div className="categories">
          {data.categories.map((item, index) => {
            let selectedCategory = categoryData.filter(
              (cate) => cate._id === item._ref
            );
            return (
              <Link
                key={index}
                href={`/writing/categories/${selectedCategory[0]?.slug.current}`}
              >
                <p className="category">{selectedCategory[0]?.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
