import React from "react";
import Transitions from "../components/Animated/Transitions";

/* Components */
import { ArticleDetail } from "../components";

const ArticlePageLayout = ({ data }) => {
  return (
    <Transitions>
      <ArticleDetail data={data} />
    </Transitions>
  );
};

export default ArticlePageLayout;
