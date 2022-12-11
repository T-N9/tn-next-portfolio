import React from "react";

import Transitions from "../components/Animated/Transitions";

/* Components */
import { ProjectHero, ProjectStatus, ProjectDescription, ProjectDirect } from "../components";

const ProjectDetailPageLayout = ({ data, slug }) => {
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
  const mockup = data?.mockup && data?.mockup;
  const pandp = data?.pandp && data?.pandp;
  const designing = data?.designing && data?.designing;
  const mockup_d = data?.mockup_d && data?.mockup_d;
  const palette = data?.colors && data?.colors;
  const typo = data?.typo && data?.typo;
  const logo = data?.logo && data?.logo;
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
      <ProjectStatus status={status} type={type} role={role} period={period} />
      <ProjectDescription
        introduction={introduction}
        url={url}
        development={development}
        mockup={mockup}
        pandp={pandp}
        designing={designing}
        mockup_d={mockup_d}
        palette={palette}
        typo={typo}
        logo={logo}
        challenge={challenge}
        result={result}
        conclusion={conclusion}
      />
      <ProjectDirect slug={slug}/>
    </Transitions>
  );
};

export default ProjectDetailPageLayout;
