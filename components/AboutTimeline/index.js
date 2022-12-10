import React from "react";

const AboutTimeline = () => {
  return (
    <section className="about-timeline">
      <h1 className="title_text center_text">My Journey</h1>
      <div className="container">
        <div>
          <div className="about-timeline--content">
            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2015-2016</h1>
                <p>Passed Matriculation Examination</p>
              </div>
            </div>
            <div className="item">
              <div className="point">
                <span></span>
              </div>

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
            </div>

            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2017-2018</h1>
                <p>
                  UCSH - CS 2<sup>nd</sup> year
                </p>
                <ul>
                  <li>
                    UCSH English Impromptu Speech - 1<sup>st</sup> Prize
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2018-2019</h1>
                <p>
                  UCSH - CS 3<sup>rd</sup> year
                </p>
                <ul>
                  <li>
                    UCSH ICT & Project Show - 1<sup>st</sup> Prize
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="point">
                <span></span>
              </div>

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
                      rel="noopener noreferrer"
                    >
                      @MMSIT
                    </a>
                  </li>
                  <li>
                    Continued self-study Software Engineering and Communications
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2021 - present</h1>
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
            </div>

            <div className="item">
              <div className="point"></div>

              <div className="description">
                <h1 className="ht_text">2022 - present</h1>
                <p>On Job Training</p>
                <ul>
                  <li>4 months of OJT at <b>Myanmar High Society</b></li>

                  <li>
                    Preparation for JLPT + ITPEC Fundamental Engineering
                    Examination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
