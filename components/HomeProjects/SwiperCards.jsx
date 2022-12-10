import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

/* Components */
import ProjectCard from "./ProjectCard";
import LoadingIcon from "../../assets/loading.svg";
import LoadingIconDark from "../../assets/loading-dark.svg";

/* Actions */
import { setProjectData } from "../../redux/slices/ProjectsSlice";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
// import "swiper-bundle.min.css";

const SwiperCards = () => {
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.projectData);

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "projects"] | order(order asc)';

    if (contentData.length === 0) {
      setIsLoading(true);
      client.fetch(query).then((data) => {
        setProjects(data);
        dispatch(setProjectData(data));
        setIsLoading(false);
      });
    }
  }, []);

  const ProjectCards = contentData?.slice(0, 3).map((project) => {
    const { title, description, icon, category, slug } = project;
    return (
      <SwiperSlide key={nanoid()}>
        <Link to={`/works/${slug.current}`}>
          <ProjectCard
            title={title}
            desc={description}
            image={urlFor(project.imgUrl)}
            icon={icon}
            category={category}
          />
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <>
      {isLoading ? (
        <div className="loading-projects">
          <div>
            <img className="light" src={LoadingIcon} alt="loading" />
            <img className="dark" src={LoadingIconDark} alt="loading" />
            <p>Loading</p>
          </div>
        </div>
      ) : (
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          slidesOffsetAfter={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1366: {
              slidesPerView: 2,
              spaceBetween: 40,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false,
            },
            414: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          className="mySwiper"
        >
          {ProjectCards}
        </Swiper>
      )}
    </>
  );
};

export default SwiperCards;
