import React from "react";

/* Images */
import SESImg from "../../assets/writing.png";

const AboutWriting = () => {
  return (
    <section className="aboutWriting">
      <div className="container_sm">
        <h1 className="title_text text_center">Writing</h1>

        <div className="writing--grid">
          <a href="https://sesbytnml.netlify.app/" target="_blank">
            <div className="card">
              <img src={SESImg} alt="Software Engineering Study" />

              <div className="heading">
                <h1 className="ht_text">Software Engineering Study</h1>

                <span className="ht_text">2020</span>
              </div>
              <p>
                A study program to understand basic principle and foundation of
                Software Engineering. The website will redirect my medium
                private articles.
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* https://sesbytnml.netlify.app/ */}
    </section>
  );
};

export default AboutWriting;
