import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

/* Component */
import Card from "./Card";

const data = [
  {
    name: "Hein Htet",
    country: "Myanmar",
    position: "Instructor",
    company: "MMSIT",
    saying:
      'Te Nyain is a well-trained student who took the "Special Web Design" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.',
  },
  {
    name: "Chris",
    company: "LOR Media",
    country: "USA",
    position: "Business Owner",
    saying:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium suscipit aliquid, aut eum sequi assumenda excepturi accusamus magnam quod doloremque? Omnis autem nesciunt ipsam deserunt debitis ex cumque obcaecati.",
  },
  {
    name: "David",
    country: "Myanmar",
    position: "Front-end developer",
    saying:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Michael",
    country: "Japan",
    position: "Senior Programmer",
    saying:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="background_div">
        <div className="">
          <h1 className="title_text text_center">What they say</h1>
          <p className="text_center desc_text">
            Things my mentors and seniors talk about me.
          </p>

          <div className="card_wrapper">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              // loop={true}
              modules={[FreeMode, Pagination, Autoplay ]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1920: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((person, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card person={person} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
