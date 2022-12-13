import React from "react";
import Transitions from "../components/Animated/Transitions";

/* Components */
import { WritingHero } from "../components";

const WritingPageLayout = () => {
  return (
    <Transitions>
      <WritingHero />
    </Transitions>
  );
};

export default WritingPageLayout;
