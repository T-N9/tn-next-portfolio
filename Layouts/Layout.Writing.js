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
import useAdsense from "../hooks/useAdsence";

const WritingPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);

  useAdsense();

  return (
    <>
      {/* <GlobalLoad loading={isLoading} isFetching={true} /> */}
      <Transitions>
        <WritingHero />
        <WritingCategory />
        <WritingAllArticles />
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-2340030299315656"
          data-ad-slot="3655775912"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </Transitions>
    </>
  );
};

export default WritingPageLayout;
