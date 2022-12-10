import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import ProjectCard from "../HomeProjects/ProjectCard";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../client";

/* Action */
import { setProjectData } from "../../redux/slices/ProjectsSlice";

const PortfolioProjects = () => {
  const [projects, setProjects] = useState(null);
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.projectData);

  useEffect(() => {
    const query = '*[_type == "projects"] | order(order asc)';

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
        <Link key={nanoid()} to={`/works/${slug.current}`}>
          <ProjectCard
            title={title}
            desc={description}
            image={urlFor(project.imgUrl)}
            icon={icon}
            category={category}
          />
        </Link>
      );
    });
  }

  return (
    <div id="projects" className="projectContent container">
      {/* <span ></span> */}
      <h1 className="title_text">Recent Works</h1>
      <div className="projectContent--grid">{projectList}</div>
    </div>
  );
};

export default PortfolioProjects;
