import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Component */
import { ArticleByCategory, GlobalLoad } from "../components";

const WritingByCategoryPageLayout = ({
  data,
  category,
  pageNumber,
  pages,
  noItems,
  slug,
  loading
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        console.log("Ads initialized");
      } catch (e) {
        console.error("Adsense error: ", e);
      }
    }
  }, []);

  return (
    <Transitions>
      <ArticleByCategory
        data={data}
        category={category}
        pageNumber={pageNumber}
        pages={pages}
        noItems={noItems}
        slug={slug}
        loading={loading}
      />
    </Transitions>
  );
};

export default WritingByCategoryPageLayout;
