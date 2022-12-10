import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <>
      <div className="content_wrapper">
        {/* <h1 className="title_text center_text">About Me</h1> */}

        <p className="lg_para">
          I am a computer science student from Myanmar. I am currently
          specializing in front-end web development and creating web
          applications from my own idea.
        </p>

        <p className="quote_para center_text">
          “My goal is to deliver a front-end stack from scratch to
          well-performed websites.”
        </p>

        <p className="lg_para">
          I love to create UI designs and prototypes before implementations.
          Collaborations make me improve in both my technical skills and
          communication. I play and compose music during my spare time.
        </p>

        <p className="quote_para center_text">
          “I care about your business values and targeted customers to meet your golden goals for tomorrow.”
        </p>

        {/* <Link to="/about">
                    <button className="primary_btn table_center">
                        More about me
                    </button>
                </Link> */}
      </div>
    </>
  );
};

export default AboutContent;
