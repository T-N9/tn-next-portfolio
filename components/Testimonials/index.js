import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

import ScrollRevealDiv from "../common/ScrollRevealDiv";
import SRG2 from "../common/SRG2";

/* Component */
import Card from "./Card";

const data = [
  {
    name: "Szu Ho Chen",
    country: "USA",
    position: "Business Owner",
    website: "https://www.bridetobebridal.com/",
    company: "Bride To Be Bridal",
    saying:
      "I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business. Working with TeNyain was a pleasure, and I highly recommend his services to anyone in need of a remarkable website.",
  },
  ,
  {
    name: "Hein Htet Zan",
    country: "Myanmar",
    position: "Web Instructor",
    website: "https://mms-it.com/",
    company: "MMSIT",
    saying:
      'Te Nyain is a well-trained student who took the "Special Web Design" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.',
  },
  {
    name: "Tr. Thant",
    company: "BS Camp",
    country: "Myanmar",
    website: "https://bscampmm.com/",
    position: "IT instructor",
    saying:
      "Te Nyain is a cooperative and collaborative student. He is open to learning and receptive to improving his studies. He follows directions perfectly and shows respect for peers and teachers. I'm impressed by his passion for discussion and collaboration. It's an honor to be his teacher.",
  },
];

const data_translate = [
  {
    english: {
      name: "Szu Ho Chen",
      country: "USA",
      position: "Business Owner",
      website: "https://www.bridetobebridal.com/",
      company: "Bride To Be Bridal",
      saying:
        "I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business. Working with TeNyain was a pleasure, and I highly recommend his services to anyone in need of a remarkable website.",
    },
    japanese: {
      name: "スー・ホー・チェン",
      country: "アメリカ",
      position: "経営者",
      website: "https://www.bridetobebridal.com/",
      company: "ブライド ト ビ ブライダル",
      saying:
        "テ・ニャインという才能あるウェブサイト開発者によって作成されたウェブサイトには大変満足しています。デザインは視覚的に素晴らしく、機能もスムーズで、私のビジネスを完璧に表現しています。テニャインとの仕事は喜びであり、傑出したウェブサイトを必要とするすべての方に彼のサービスを強くお勧めします。",
    },
  },
  ,
  {
    english: {
      name: "Hein Htet Zan",
      country: "Myanmar",
      position: "Web Instructor",
      website: "https://mms-it.com/",
      company: "MMSIT",
      saying:
        'Te Nyain is a well-trained student who took the "Special Web Design" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.',
    },
    japanese: {
      name: "ヘイン・テット・ザン",
      country: "ミャンマー",
      position: "ウェブ講師",
      website: "https://mms-it.com/",
      company: "MMSIT",
      saying:
        "テ・ニャインは私たちから「特別なWebデザイン」コースを受講した訓練された学生です。彼はフロントエンド開発に特化し、信頼性のあるインタラクティブなウェブサイトを提供しています。",
    },
  },
  {
    english: {
      name: "Tr. Thant",
      company: "BS Camp",
      country: "Myanmar",
      website: "https://bscampmm.com/",
      position: "IT instructor",
      saying:
        "Te Nyain is a cooperative and collaborative student. He is open to learning and receptive to improving his studies. He follows directions perfectly and shows respect for peers and teachers. I'm impressed by his passion for discussion and collaboration. It's an honor to be his teacher.",
    },
    japanese: {
      name: "先生 タント",
      company: "BS Camp",
      country: "ミャンマー",
      position: "IT講師",
      website: "https://bscampmm.com/",
      saying:
        "テ・ニャインは協力的で協力的な学生です。彼は学習に対してオープンで、研究の向上に対しても受け入れる姿勢があります。彼は完璧に指示に従い、仲間や先生に対して尊重を示します。彼の議論と協力への情熱に感銘を受けています。彼の先生であることは光栄です。",
    },
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials">
      <div className="background_div">
        <div className="">
          <h1 className="title_text text_center outlined_title">
            {t("What they say")}
          </h1>

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
              modules={[FreeMode, Pagination]}
              className="mySwiper hide_on_desktop"
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
              {data_translate.map((person, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card person={person} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="oneByone_wrapper container_sm hide_on_mobile">
              {data_translate.map((person, index) => {
                // console.log({here: index})
                return (
                  <SRG2 key={index} index={index} type="column" noOfColumn={2}>
                    <Card person={person} />
                  </SRG2>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
