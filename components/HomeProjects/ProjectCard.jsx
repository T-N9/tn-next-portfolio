import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "../../client";
import { useNextSanityImage } from "next-sanity-image";

/* Icons */
import "css.gg/icons/css/code-slash.css";
import "css.gg/icons/css/arrow-right-r.css";
import "css.gg/icons/css/code.css";
import "css.gg/icons/css/color-bucket.css";
import "css.gg/icons/css/chevron-right.css";

const ProjectCard = ({ title, desc, image, icon, category, projectLink }) => {
  console.log({ projectLink });
  const imageProps = useNextSanityImage(client, image);
  return (
    <>
      <div className="projectCard">
        <div className="image_wrapper">
          <div className="projectCard--header">
            <div className="category_tag">
              <i className={`gg-${icon}`}></i>
              <p>{category}</p>
            </div>
          </div>
          <div className="projectCard--image">
            <Link href={projectLink ? projectLink : ""}>
              <Image
                {...imageProps}
                width={525}
                height={339.66}
                alt="portfolio project"
                quality={100}
              />
            </Link>
          </div>
        </div>
        <div className="col_2">
          <div className="projectCard--text">
            <Link href={projectLink ? projectLink : ""}>
              <h1>{title}</h1>
            </Link>

            <p>{desc}</p>
          </div>

          <Link href={projectLink ? projectLink : ""}>
            <div className="separation_btn">
              <p>View Project</p>
              <i className={`gg-chevron-right`}></i>
            </div>
          </Link>

          <button className="view_pjBtn">
            view detail
            <i className={`gg-arrow-right-r`}></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
