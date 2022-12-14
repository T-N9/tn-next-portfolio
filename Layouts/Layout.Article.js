import React from "react";
import Transitions from "../components/Animated/Transitions";

/* Components */
import { ArticleDetail } from "../components";

const ArticlePageLayout = ({ data, slug }) => {
  return (
    <Transitions>
      <ArticleDetail data={data} slug={slug} />
    </Transitions>
  );
};

export default ArticlePageLayout;
