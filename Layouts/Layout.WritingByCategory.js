import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Component */
import { ArticleByCategory } from "../components";

const WritingByCategoryPageLayout = ({ data, category }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);
  return (
    <Transitions>
      <ArticleByCategory data={data} category={category} />
    </Transitions>
  );
};

export default WritingByCategoryPageLayout;
