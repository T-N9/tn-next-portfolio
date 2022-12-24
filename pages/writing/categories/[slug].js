import React, { useEffect, useState } from "react";
import Head from "next/head";
import { client } from "../../../client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setCategoryData } from "../../../store/slices/WritingSlice";

/* action */
import {
  setStartLoading,
  setStopLoading,
} from "../../../store/slices/LoadingSlice";

/* Hook */
import CalPaginate from "../../../hooks/CalPaginate";

/* Layout */
import { WritingByCategoryPageLayout } from "../../../Layouts";

const SearchByCategory = ({ category, slug }) => {
  const dispatch = useDispatch();
  const { categoryData } = useSelector((state) => state.writingData);

  const [articleData, setArticleData] = useState(null);

  const [dataCount, setDataCount] = useState(null);
  const [arctLoading, setArctLoading] = useState(false);

  const router = useRouter();
  const pageNumber = parseInt(router.query.page) || 1;
  // console.log({ router });

  const { startIndex, endIndex, pages, noItems } = CalPaginate(
    dataCount,
    pageNumber
  );
  // console.log({
  //   startIndex,
  //   endIndex,
  //   pages,
  //   noItems,
  // });

  useEffect(() => {
    client
      .fetch(
        `count(*[_type == "article" && "${category?._id}" in categories[]._ref])`
      )
      .then((data) => {
        setDataCount(data);
      });
  }, []);

  useEffect(() => {
    dispatch(setStartLoading());

    const query = '*[_type == "category"]';

    if (categoryData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setCategoryData(data));
        dispatch(setStopLoading());
      });
    } else {
      dispatch(setStopLoading());
    }
  }, []);

  useEffect(() => {
    dispatch(setStartLoading());
    setArctLoading(true);

    if (startIndex !== null && endIndex !== null) {
      const query = `*[_type == "article" && "${category?._id}" in categories[]._ref] | order(_createdAt desc) [${startIndex}...${endIndex}]`;

      client.fetch(query).then((data) => {
        setArticleData(data);
        dispatch(setStopLoading());
        setArctLoading(false);
      });
    }
  }, [categoryData, slug, pageNumber, startIndex, endIndex]);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta
          name="title"
          content={`${category?.title} | Articles by category`}
        />
        <meta
          name="description"
          content={`Read my ${category?.title} articles.`}
        />
        <meta
          name="keywords"
          content="Te Nyain Moe Lwin, TeNyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="TeNyain Moe Lwin" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{category?.title} | Articles by category</title>
        <meta
          name="title"
          content={`${category?.title} | Articles by category`}
        />
        <meta
          name="description"
          content={`Read my ${category?.title} articles.`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.tenyain.com/writing/categories/${slug}`}
        />
        <meta
          property="og:title"
          content={`${category?.title} | Articles by category`}
        />
        <meta
          property="og:description"
          content={`Read my ${category?.title} articles.`}
        />
        <meta property="og:image" content="../meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.tenyain.com/writing/categories/${slug}`}
        />
        <meta
          property="twitter:title"
          content={`${category?.title} | Articles by category`}
        />
        <meta
          property="twitter:description"
          content={`Read my ${category?.title} articles.`}
        />
        <meta property="twitter:image" content="../meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>{category?.title} | Articles by category</title>
      </Head>
      <main>
        <WritingByCategoryPageLayout
          data={articleData}
          category={category}
          pageNumber={pageNumber}
          pages={pages}
          noItems={noItems}
          slug={slug}
          loading={arctLoading}
        />
      </main>
    </>
  );
};

export default SearchByCategory;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "category" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const category = await client.fetch(
    `
      *[_type == "category" && slug.current == $slug][0]
    `,
    { slug }
  );

  return {
    props: {
      category,
      slug,
    },
    revalidate: 10,
  };
}
