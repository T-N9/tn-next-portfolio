import React from "react";

import Transitions from "../components/Animated/Transitions";
import { urlFor } from "../client";

/* Components */
import { ProjectHero } from "../components";

const ProjectDetailPageLayout = ({ data }) => {
  const title = data?.title;
  const image = data?.imgUrl;
  const intro = data?.description;
  const category = data?.category;
  const icon = data?.icon;
  const status = data?.status;
  const type = data?.type;
  const role = data?.role;
  const url = data?.url;
  const period = data?.period;
  const introduction = data?.introduction;
  const development = data?.development && data?.development;
  const mockup = data?.mockup && urlFor(data?.mockup);
  const pandp = data?.pandp && data?.pandp;
  const designing = data?.designing && data?.designing;
  const mockup_d = data?.mockup_d && urlFor(data?.mockup_d);
  const palette = data?.colors && data?.colors;
  const typo = data?.typo && urlFor(data?.typo);
  const logo = data?.logo && urlFor(data?.logo);
  const challenge = data?.challenge;
  const result = data?.result;
  const conclusion = data?.conclusion;
  return (
    <Transitions>
      <div className="nav_spacer"></div>
      <ProjectHero
        title={title}
        mainImage={image}
        intro={intro}
        category={category}
        icon={icon}
      />
    </Transitions>
  );
};

export default ProjectDetailPageLayout;
