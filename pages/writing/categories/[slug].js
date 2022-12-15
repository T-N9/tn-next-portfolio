import React, { useEffect, useState } from "react";
import Head from "next/head";
import { client } from "../../../client";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../../../store/slices/WritingSlice";

/* Layout */
import { WritingByCategoryPageLayout } from "../../../Layouts";

const SearchByCategory = () => {
  const dispatch = useDispatch();
  const { categoryData } = useSelector((state) => state.writingData);
  const router = useRouter();
  const slug = router.query.slug;

  const [articleData, setArticleData] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const query = '*[_type == "category"]';

    if (categoryData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setCategoryData(data));
      });
    }
  }, []);

  useEffect(() => {
    const selectedCategory = categoryData.filter(
      (cate) => cate.slug.current === slug
    );

    const query = `*[_type == "article" && "${selectedCategory[0]?._id}" in categories[]._ref]`;

    client.fetch(query).then((data) => {
      setArticleData(data);
      setCurrentCategory(selectedCategory[0]);
    });
  }, [categoryData, slug]);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta
          name="title"
          content={`${currentCategory?.title} | Articles by category`}
        />
        <meta
          name="description"
          content={`Read ${currentCategory?.title} articles.`}
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
        <title>{currentCategory?.title} | Articles by category</title>
        <meta
          name="title"
          content={`${currentCategory?.title} | Articles by category`}
        />
        <meta
          name="description"
          content={`Read ${currentCategory?.title} articles.`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.tenyain.com/writing/categories/${slug}`}
        />
        <meta
          property="og:title"
          content={`${currentCategory?.title} | Articles by category`}
        />
        <meta
          property="og:description"
          content={`Read ${currentCategory?.title} articles.`}
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.tenyain.com/writing/categories/${slug}`}
        />
        <meta
          property="twitter:title"
          content={`${currentCategory?.title} | Articles by category`}
        />
        <meta
          property="twitter:description"
          content={`Read ${currentCategory?.title} articles.`}
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>{currentCategory?.title} | Articles by category</title>
      </Head>
      <main>
        <WritingByCategoryPageLayout
          data={articleData}
          category={currentCategory}
        />
      </main>
    </>
  );
};

export default SearchByCategory;
