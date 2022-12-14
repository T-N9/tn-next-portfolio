import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";

/* Hook */
import Hook from "./hook";

const ArticleDetail = ({ data }) => {
  const { categoryData, titleImgProps } = Hook(data.titleImage);

  return (
    <section className="article_page">
      <div className="container_sm container_y_3">
        <div className="container_x_sm">
          <div className="article_page--header">
            <h1 className="ht_text">{data.title}</h1>

            <p className="created_date">
              {moment(data._createdAt).format("L")}
            </p>
          </div>

          <div className="categories">
            {data.categories.map((item, index) => {
              let selectedCategory = categoryData.filter(
                (cate) => cate._id === item._ref
              );
              return (
                <Link
                  key={index}
                  href={`writing/categories/${selectedCategory[0]?.slug.current}`}
                >
                  <p className="category">{selectedCategory[0]?.title}</p>
                </Link>
              );
            })}
          </div>

          <div>
            <Image
              {...titleImgProps}
              style={{ maxWidth: "100%", height: "auto" }}
              quality={80}
              alt="Post Image"
            />
          </div>

          <div className="block_content">
            <BlockContent
              projectId={"qasqfzl0"}
              dataset={"production"}
              blocks={data.content}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
