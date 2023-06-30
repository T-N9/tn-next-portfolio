import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Link from "next/link";
import { client, urlFor } from "../../client";

/* Components */
import ProjectCard from "../HomeProjects/ProjectCard";

/* Action */
import { setProjectData } from "../../store/slices/ProjectsSlice";

import * as Scroll from "react-scroll";

var Element = Scroll.Element;

const PortfolioProjects = () => {
  const [projects, setProjects] = useState(null);
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.projectData);

  useEffect(() => {
    const query = '*[_type == "project"]|order(orderRank)';

    contentData.length === 0 &&
      client.fetch(query).then((data) => {
        setProjects(data);
        dispatch(setProjectData(data));
      });
  }, []);

  let projectList;
  if (contentData !== null) {
    projectList = contentData?.map((project) => {
      const { title, description, icon, category, slug } = project;
      return (
        <Link key={nanoid()} href={`/works/${slug.current}`}>
          <ProjectCard
            title={title}
            desc={description}
            image={project.imgUrl}
            icon={icon}
            category={category}
          />
        </Link>
      );
    });
  }

  return (
    <div id="projects" className="projectContent container">
      <Element name="projects_section" className="projects_section">
        {/* <span ></span> */}
        <h1 className="title_text center_text outlined_title">Recent Works</h1>
        <div className="projectContent--grid">{projectList}</div>
      </Element>
    </div>
  );
};

export default PortfolioProjects;
