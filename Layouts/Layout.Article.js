import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import { ArticleDetail } from "../components";
import useAdsense from "../hooks/useAdsence";

const ArticlePageLayout = ({ data, slug }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);

  useAdsense();

  return (
    <Transitions>
      <ArticleDetail data={data} slug={slug} />
    </Transitions>
  );
};

export default ArticlePageLayout;
