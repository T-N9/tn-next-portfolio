import React from "react";
import Transitions from "../components/Animated/Transitions";

const ArticlePageLayout = ({ data }) => {
  return (
    <Transitions>
      <h1>{data.title}</h1>
    </Transitions>
  );
};

export default ArticlePageLayout;
