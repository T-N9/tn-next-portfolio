import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../client";

import "css.gg/icons/css/arrow-right-o.css";
import "css.gg/icons/css/arrow-left-o.css";

const ProjectDirect = ({ slug }) => {
  const [slugs, setSlugs] = useState([]);

  const [nextProject, setNextProject] = useState("");
  const [prevProject, setPrevProject] = useState("");
  const [project, setProject] = useState(null);
  const projectNo = slugs.indexOf(slug) + 1;

  let isPrev = projectNo > 1;
  let isNext = projectNo < slugs.length + 1;

  useEffect(() => {
    const query = `*[_type == "project" ] | order(orderRank)`;

    client.fetch(query).then((data) => {
      let slugData = data.map((item) => {
        // setSlugs((prev) => [...prev, item.slug.current]);
        return item.slug.current;
      });

      setSlugs(slugData);

      let my_project = data.filter((item) => {
        return slug === item.slug.current;
      });

      setProject(my_project);
    });
  }, [slug]);

  useEffect(() => {
    if (slugs !== []) {
      setNextProject(slugs[slugs.indexOf(slug) + 1]);
    }

    if (isPrev) {
      setPrevProject(slugs[slugs.indexOf(slug) - 1]);
    }
  }, [slugs, slug]);
  return (
    <div className="button_bar container_y_2 container_sm">
      <div>
        {isPrev && (
          <Link href={`/works/${prevProject}`} scroll>
            <button className="outlined_btn">
              <i className="gg-arrow-left-o"></i>
            </button>
          </Link>
        )}
      </div>

      <div>
        {nextProject !== undefined && (
          <Link href={`/works/${nextProject}`} scroll>
            <button className="outlined_btn">
              <i className="gg-arrow-right-o"></i>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDirect;
