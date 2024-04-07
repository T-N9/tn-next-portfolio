import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <>
      <div className="content_wrapper">

        <p className="lg_para">
          I am a karen
          <a
            href="https://en.wikipedia.org/wiki/Karen_people"
            target="_blank"
            rel="noreferrer"
            className="about_karen"
          >
            <Image
              className="karen_flag"
              width={40}
              height={25}
              src="/content/karennationflag.svg"
              alt="Karen Nation Flag"
            />
          </a>
          , a computer science student from Myanmar, recently relocated to Chiang Mai, Thailand. I am currently specializing
          in front-end web development and creating web applications from my own
          idea.
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
          “I care about your business values and targeted customers to meet your
          golden goals for tomorrow.”
        </p>
      </div>
    </>
  );
};

export default AboutContent;
