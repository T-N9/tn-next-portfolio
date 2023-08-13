import React from "react";
import Image from "next/image";

import { client } from "../../client";
import { useNextSanityImage } from "next-sanity-image";

/* Icons */
import "css.gg/icons/css/code-slash.css";
import "css.gg/icons/css/arrow-right-r.css";
import "css.gg/icons/css/code.css";
import "css.gg/icons/css/color-bucket.css";
import "css.gg/icons/css/chevron-right.css";

const ProjectCard = (props) => {
  const { title, desc, image, icon, category } = props;

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
            <Image
              {...imageProps}
              width={525}
              height={339.66}
              alt="portfolio project"
              quality={100}
            />
          </div>
        </div>
        <div className="col_2">
          <div className="projectCard--text">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>

          <div className="separation_btn">
            <p>View Project</p>

            <i className={`gg-chevron-right`}></i>
          </div>

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
