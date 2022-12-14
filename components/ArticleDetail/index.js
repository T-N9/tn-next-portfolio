import React from "react";
import { useRouter } from "next/router";
import moment from "moment/moment";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";

/* Hook */
import Hook from "./hook";

const ArticleDetail = ({ data, slug }) => {
  const { categoryData, titleImgProps } = Hook(data.titleImage);

  const router = useRouter();

  return (
    <section className="article_page">
      <div className="container_sm container_y_3">
        <div className="container_x_sm">
          <div className="breadcrumb">
            <p>
              {" "}
              <span
                className="item route"
                onClick={() => {
                  router.push("/writing");
                }}
              >
                Writing
              </span>{" "}
              &gt; <span className="ht_text">{data.title}</span>
            </p>
          </div>

          <div className="article_page--header">
            <h1 className="title ht_text">{data.title}</h1>

            <p className="created_date">
              Published on {moment(data._createdAt).format("MMMM Do YYYY")}
            </p>
          </div>

          <div className="categories">
            {data.categories.map((item, index) => {
              let selectedCategory = categoryData.filter(
                (cate) => cate._id === item._ref
              );
              return (
                <p
                  key={index}
                  onClick={() => {
                    router.push(
                      `writing/categories/${selectedCategory[0]?.slug.current}`
                    );
                  }}
                  className="category route"
                >
                  {selectedCategory[0]?.title}
                </p>
              );
            })}
          </div>

          <div className="title_image">
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

          <div className="separator"></div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
