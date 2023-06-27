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
    name: "Cho Cho Chen",
    country: "USA",
    position: "Business Owner",
    website : "https://www.bridetobebridal.com/",
    company: "Bride To Be Bridal",
    saying:
      'I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business. Working with TeNyain was a pleasure, and I highly recommend his services to anyone in need of a remarkable website.',
  },
  ,
  {
    name: "Hein Htet Zan",
    country: "Myanmar",
    position: "Web Instructor",
    website : "https://mms-it.com/",
    company: "MMSIT",
    saying:
      'Te Nyain is a well-trained student who took the "Special Web Design" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.',
  },
  {
    name: "Tr. Thant",
    company: "BS Camp",
    country: "Myanmar",
    website : "https://bscampmm.com/",
    position: "IT instructor",
    saying:
      "Te Nyain is a cooperative and collaborative student. He is open to learning and receptive to improving his studies. He follows directions perfectly and shows respect for peers and teachers. I'm impressed by his passion for discussion and collaboration. It's an honor to be his teacher.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="background_div">
        <div className="">
          <h1 className="title_text text_center">What they say</h1>
          {/* <p className="text_center desc_text">
            Things my mentors and seniors talk about me.
          </p> */}

          <div className="card_wrapper">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              // autoplay={{
              //   delay: 6000,
              //   disableOnInteraction: false,
              // }}
              // loop={true}
              modules={[FreeMode, Pagination ]}
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
