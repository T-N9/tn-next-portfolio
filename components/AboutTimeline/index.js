import React from "react";

import SRG2 from "../common/SRG2";

const AboutTimeline = () => {
  return (
    <section className="about-timeline">
      <h1 className="title_text center_text">My Journey</h1>
      <div className="container">
        <div>
          {/* For Mobile */}
          <div className="about-timeline--content hide_on_desktop">
            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2015-2016</h1>
                  <p>Passed Matriculation Examination</p>
                </div>
              </SRG2>
            </div>
            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2016-2017</h1>
                  <p>
                    UCSH - CS 1<sup>st</sup> year
                  </p>
                  <ul>
                    <li>
                      UCSH Web Design Competition (HTML & CSS) - 1<sup>st</sup>{" "}
                      Prize
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2017-2018</h1>
                  <p>
                    UCSH - CS 2<sup>nd</sup> year
                  </p>
                  <ul>
                    <li>
                      UCSH English Impromptu Speech - 1<sup>st</sup> Prize
                    </li>
                    <li>
                      Designer at{" "}
                      <a
                        className="ht_text"
                        href="https://www.facebook.com/BarCampHinthada"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BarCamp Hinthada 2018
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2018-2019</h1>
                  <p>
                    UCSH - CS 3<sup>rd</sup> year
                  </p>
                  <ul>
                    <li>
                      UCSH ICT & Project Show - 1<sup>st</sup> Prize
                    </li>
                    <li>
                      Co-founded{" "}
                      <a
                        className="ht_text"
                        href="https://sites.google.com/view/ucshmusicclub/home?pli=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        UCSH Music Club
                      </a>
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2020</h1>
                  <p>Covid Outbreak</p>
                  <ul>
                    <li>
                      Started learning Web design & development{" "}
                      <a
                        className="ht_text"
                        href="https://www.facebook.com/mmsoss"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @MMSIT
                      </a>
                    </li>
                    <li>
                      Continued self-study Software Engineering and
                      Communications
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2021</h1>
                  <p>Dark Times in Myanmar</p>
                  <ul>
                    <li>
                      <a
                        className="ht_text"
                        href="https://twitter.com/hashtag/WhatsHappeningInMyanmar?src=hashtag_click"
                      >
                        #WhatsHappeningInMyanmar
                      </a>{" "}
                    </li>
                    <li>My Front-end and Freelancing journey were started</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2022</h1>
                  <p>On Job Training</p>
                  <ul>
                    <li>
                      4 months of OJT at <b>Myanmar High Society</b>
                    </li>
                    <li>
                      Preparation for JLPT + ITPEC Fundamental Engineering
                      Examination
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
              </div>

              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2023</h1>
                  <p>In Progress</p>
                  <ul>
                    <li>Passed ITPEC Fundamental IT Engineer Examination</li>
                  </ul>
                </div>
              </SRG2>
            </div>
          </div>

          {/* For desktop */}
          <div className="about-timeline--content column_layout mx-auto hide_on_mobile">
            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={1}>
                <div className="description">
                  <h1 className="ht_text">2015-2016</h1>
                  <p>Passed Matriculation Examination</p>
                </div>
              </SRG2>
            </div>
            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={2}>
                <div className="description">
                  <h1 className="ht_text">2016-2017</h1>
                  <p>
                    UCSH - CS 1<sup>st</sup> year
                  </p>
                  <ul>
                    <li>
                      UCSH Web Design Competition (HTML & CSS) - 1<sup>st</sup>{" "}
                      Prize
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={3}>
                <div className="description">
                  <h1 className="ht_text">2017-2018</h1>
                  <p>
                    UCSH - CS 2<sup>nd</sup> year
                  </p>
                  <ul>
                    <li>
                      UCSH English Impromptu Speech - 1<sup>st</sup> Prize
                    </li>
                    <li>
                      Designer at{" "}
                      <a
                        className="ht_text"
                        href="https://www.facebook.com/BarCampHinthada"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BarCamp Hinthada 2018
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={4}>
                <div className="description">
                  <h1 className="ht_text">2018-2019</h1>
                  <p>
                    UCSH - CS 3<sup>rd</sup> year
                  </p>
                  <ul>
                    <li>
                      UCSH ICT & Project Show - 1<sup>st</sup> Prize
                    </li>
                    <li>
                      Co-founded{" "}
                      <a
                        className="ht_text"
                        href="https://sites.google.com/view/ucshmusicclub/home?pli=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        UCSH Music Club
                      </a>
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={5}>
                <div className="description">
                  <h1 className="ht_text">2020</h1>
                  <p>Covid Outbreak</p>
                  <ul>
                    <li>
                      Started learning Web design & development{" "}
                      <a
                        className="ht_text"
                        href="https://www.facebook.com/mmsoss"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @MMSIT
                      </a>
                    </li>
                    <li>
                      Continued self-study Software Engineering and
                      Communications
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={6}>
                <div className="description">
                  <h1 className="ht_text">2021</h1>
                  <p>Dark Times in Myanmar</p>
                  <ul>
                    <li>
                      <a
                        className="ht_text"
                        href="https://twitter.com/hashtag/WhatsHappeningInMyanmar?src=hashtag_click"
                      >
                        #WhatsHappeningInMyanmar
                      </a>{" "}
                    </li>
                    <li>My Front-end and Freelancing journey were started</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>

              <SRG2 index={7}>
                <div className="description">
                  <h1 className="ht_text">2022</h1>
                  <p>On Job Training</p>
                  <ul>
                    <li>
                      4 months of OJT at <b>Myanmar High Society</b>
                    </li>
                    <li>
                      Preparation for JLPT + ITPEC Fundamental Engineering
                      Examination
                    </li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
              </div>

              <SRG2 index={8}>
                <div className="description">
                  <h1 className="ht_text">2023</h1>
                  <p>In Progress</p>
                  <ul>
                    <li>Passed ITPEC Fundamental IT Engineer Examination</li>
                  </ul>
                </div>
              </SRG2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
