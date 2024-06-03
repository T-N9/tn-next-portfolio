import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import { ArticleDetail } from "../components";

const ArticlePageLayout = ({ data, slug }) => {
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
      <ArticleDetail data={data} slug={slug} />
    </Transitions>
  );
};

export default ArticlePageLayout;
