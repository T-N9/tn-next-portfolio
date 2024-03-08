import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";

import { client } from "../../client";

import ScrollRevealDiv from "../common/ScrollRevealDiv";

/* Components */
import ProjectCard from "./ProjectCard";
import LoadingIcon from "../../assets/loading.svg";
import LoadingIconDark from "../../assets/loading-dark.svg";

/* Actions */
import { setProjectData } from "../../store/slices/ProjectsSlice";

const OneByOneCards = () => {
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.projectData);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "project"]|order(orderRank)';

    if (contentData.length === 0) {
      setIsLoading(true);
      client.fetch(query).then((data) => {
        dispatch(setProjectData(data));
        setIsLoading(false);
      });
    }
  }, []);

  const ProjectCards = contentData?.slice(0, 4).map((project, index) => {
    const { title, description, icon, category, slug } = project;
    // console.log({ link: `/works/${slug.current}` });
    return (
      <React.Fragment key={index}>
        <ScrollRevealDiv>
          <Link href={`/works/${slug.current}`}>
            <ProjectCard
              title={title}
              desc={description}
              image={project.imgUrl}
              icon={icon}
              category={category}
              projectLink={`/works/${slug.current}`}
            />
          </Link>
        </ScrollRevealDiv>
      </React.Fragment>
    );
  });

  return (
    <>
      {isLoading ? (
        <div className="loading-projects">
          <div>
            <Image
              width={100}
              height={200}
              priority
              className="light"
              src={LoadingIcon}
              alt="loading"
            />
            <Image
              width={100}
              height={200}
              priority
              className="dark"
              src={LoadingIconDark}
              alt="loading"
            />
            <p>Loading</p>
          </div>
        </div>
      ) : (
        <div className="project_columns container_sm">{ProjectCards}</div>
      )}
    </>
  );
};

export default OneByOneCards;
