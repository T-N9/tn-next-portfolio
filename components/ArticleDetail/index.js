import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment/moment";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";

/* Icons */
import {
  Facebook,
  Twitter,
  Gmail,
  Linkedin,
  Messenger
} from "@icons-pack/react-simple-icons";

/* Hook */
import Hook from "./hook";

const serializers = {
  types: {
    code: (props) => (
      <div className="code-section">
        <pre>
          <code>{props.node.code}</code>
        </pre>
      </div>
    ),
  },
}

const ArticleDetail = ({ data, slug }) => {
  const { categoryData, titleImgProps } = Hook(data.titleImage);

  const router = useRouter();
  const path = router.asPath;

  console.log({data})

  return (
    <section className="article_page">
      <div className="container_sm container_y_3">
        <div className="container_x_sm">
          <div className="breadcrumb">
            <p>
              {" "}
              <Link className="item route" href={"/writing"}>
                Writing
              </Link>{" "}
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
            {data?.categories?.map((item, index) => {
              let selectedCategory = categoryData.filter(
                (cate) => cate._id === item._ref
              );
              return (
                <Link
                  key={index}
                  href={`/writing/categories/${selectedCategory[0]?.slug.current}`}
                  className="category route"
                >
                  {selectedCategory[0]?.title}
                </Link>
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
              projectId={"dm3kiwds"}
              dataset={"production"}
              blocks={data.content}
              serializers={serializers}
            />
          </div>

          <div className="separator"></div>

          <div className="share_banner">
            <p className="ht_text">Share on :</p>

            <div className="icons">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://tenyain.com/${path}`}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook xlinkTitle="true" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${data?.title}&url=https://tenyain.com/${path}`}
                target="_blank"
                rel="noreferrer"
              >
                <Twitter xlinkTitle="true" />
              </a>

              <a
                href={`http://www.linkedin.com/shareArticle?mini=true&url=https://tenyain.com/${path}`}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin xlinkTitle="true" />
              </a>

              <a href="fb-messenger://share/?link=https://tenyain.com/${path}">
                <Messenger xlinkTitle="true"/>
              </a>

              <a
                href={`mailto:?subject=Thought you might like ${data?.title}.&body=Hello, This is my article ${data?.title}. I would like to share it with you.%0D%0A%0D%0Ahttps://tenyain.com/${path}`}
                target="_blank"
                rel="noreferrer"
              >
                <Gmail xlinkTitle="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
