import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

import Transitions from "../components/Animated/Transitions";

/* Components */
import {
  ProjectHero,
  ProjectStatus,
  ProjectDescription,
  ProjectDirect,
} from "../components";

const ProjectDetailPageLayout = ({ data, slug }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Works"));
  }, []);

  /* Project variables */
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
  const mockup_1 = data?.mockup_1 && data?.mockup_1;
  const preparation = data?.preparation && data?.preparation;
  const designing = data?.designing && data?.designing;
  const mockup_2 = data?.mockup_2 && data?.mockup_2;
  const palette = data?.colors && data?.colors;
  const typo = data?.typo && data?.typo;
  const logo = data?.logo && data?.logo;
  const challenge = data?.challenge;
  const result = data?.result;
  const conclusion = data?.conclusion;

  return (
    <Transitions>
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
        mockup_1={mockup_1}
        preparation={preparation}
        designing={designing}
        mockup_2={mockup_2}
        palette={palette}
        typo={typo}
        logo={logo}
        challenge={challenge}
        result={result}
        conclusion={conclusion}
      />
      <ProjectDirect slug={slug} />
    </Transitions>
  );
};

export default ProjectDetailPageLayout;
