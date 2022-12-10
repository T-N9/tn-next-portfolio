import React from "react";
import {
  Github,
  Linkedin,
  Codepen,
  Gmail,
} from "@icons-pack/react-simple-icons";
import ReactMarkdown from "react-markdown";

const ReachMe = () => {
  return (
    <>
      <div className="reach_me">
        <h1>Reach me via</h1>

        <div className="icon_banner">
          <a href="https://github.com/T-N9" target="_blank" rel="noreferrer">
            <Github xlinkTitle="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin xlinkTitle="true" />
          </a>
          <a href="https://codepen.io/t-n9" target="_blank" rel="noreferrer">
            <Codepen xlinkTitle="true" />
          </a>
          <a href="mailto:tenyainmoelwin@gmail.com">
            <Gmail xlinkTitle="true" />
          </a>
        </div>

        <img width={113} height={20} src="https://komarev.com/ghpvc/?username=T-N9" alt=""/>
      </div>
    </>
  );
};

export default ReachMe;
