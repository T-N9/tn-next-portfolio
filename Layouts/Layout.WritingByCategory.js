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
  slug
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Writing"));
  }, []);

  const { isLoading } = useSelector((state) => state.loadingState);

  return (
    <Transitions>
      <GlobalLoad loading={isLoading} />
      <ArticleByCategory
        data={data}
        category={category}
        pageNumber={pageNumber}
        pages={pages}
        noItems={noItems}
        slug={slug}
      />
    </Transitions>
  );
};

export default WritingByCategoryPageLayout;
