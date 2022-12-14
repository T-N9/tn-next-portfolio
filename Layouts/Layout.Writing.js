import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import { WritingHero, WritingCategory, WritingAllBlogs } from "../components";

const WritingPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);
  return (
    <Transitions>
      <WritingHero />
      <WritingCategory />
      <WritingAllBlogs />
    </Transitions>
  );
};

export default WritingPageLayout;
