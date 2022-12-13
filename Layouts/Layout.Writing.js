import React from "react";
import Transitions from "../components/Animated/Transitions";

/* Components */
import { WritingHero, WritingCategory } from "../components";

const WritingPageLayout = () => {
  return (
    <Transitions>
      <WritingHero />
      <WritingCategory />
    </Transitions>
  );
};

export default WritingPageLayout;
