import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import {
  WritingHero,
  WritingCategory,
  WritingAllArticles,
  GlobalLoad,
} from "../components";

const WritingPageLayout = () => {
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
    <>
      {/* <GlobalLoad loading={isLoading} isFetching={true} /> */}
      <Transitions>
        <WritingHero />
        <WritingCategory />
        <WritingAllArticles/>
      </Transitions>
    </>
  );
};

export default WritingPageLayout;
