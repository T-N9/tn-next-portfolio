import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import { WritingHero, WritingCategory, WritingAllArticles } from "../components";

const WritingPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);
  return (
    <Transitions>
      <WritingHero />
      <WritingCategory />
      <WritingAllArticles />
    </Transitions>
  );
};

export default WritingPageLayout;
