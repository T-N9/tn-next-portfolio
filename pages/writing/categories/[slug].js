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
        console.log({ data });
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
      <Head></Head>
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
