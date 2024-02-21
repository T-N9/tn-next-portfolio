import React from "react";
import { useTranslation } from "react-i18next";
import {
  Html5,
  CssThree,
  Sass,
  Javascript,
  Typescript,
  Bootstrap,
  Tailwindcss,
  ReactJs,
  Github,
  Figma,
  Microsoftword,
  Microsoftpowerpoint,
  Visualstudiocode,
  Redux,
  Nextdotjs,
  Framer,
  Firebase,
  Netlify,
  Vercel,
  Mysql,
  Lighthouse
} from "@icons-pack/react-simple-icons";
import ServiceIntro from "./ServiceIntro";

import SRG2 from "../common/SRG2";

const HomeSkills = () => {
  const { t } = useTranslation();
  return (
    <section className="skill_page_wrapper">
      <div className="container_sm skill_page">
        <h1 className="title_text text_center">{t("skills")}</h1>
        <div className="skill_page--grid">
          {/* Core Front-End Technologies */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={0}>
              <Html5 xlinkTitle="true" />
            </SRG2>
            HTML5
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={1}>
              <CssThree xlinkTitle="true" />
            </SRG2>
            CSS3
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={2}>
              <Javascript xlinkTitle="true" />
            </SRG2>
            JavaScript
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={2}>
              <Typescript xlinkTitle="true" />
            </SRG2>
            Typescript
          </div>

          {/* Front-End Frameworks and Libraries */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={6}>
              <ReactJs xlinkTitle="true" />
            </SRG2>
            React.js
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={4}>
              <Bootstrap xlinkTitle="true" />
            </SRG2>
            Bootstrap
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={5}>
              <Tailwindcss xlinkTitle="true" />
            </SRG2>
            TailwindCSS
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={12}>
              <Redux xlinkTitle="true" />
            </SRG2>
            Redux
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={13}>
              <Nextdotjs xlinkTitle="true" />
            </SRG2>
            Next JS
          </div>

          {/* Styling and Preprocessing */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={3}>
              <Sass xlinkTitle="true" />
            </SRG2>
            SCSS
          </div>

          {/* Backend and Database */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={15}>
              <Firebase xlinkTitle="true" />
            </SRG2>
            Firebase
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={15}>
              <Mysql xlinkTitle="true" />
            </SRG2>
            Mysql
          </div>

          {/* Animation and Prototyping */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={14}>
              <Framer xlinkTitle="true" />
            </SRG2>
            Framer
          </div>

          {/* Version Control and Design Tools */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={7}>
              <Github xlinkTitle="true" />
            </SRG2>
            GitHub
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={8}>
              <Figma xlinkTitle="true" />
            </SRG2>
            Figma
          </div>

          {/* Development Tools */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={11}>
              <Visualstudiocode xlinkTitle="true" />
            </SRG2>
            VS Code
          </div>

          {/* Hosting */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={11}>
              <Netlify xlinkTitle="true" />
            </SRG2>
            Netlify
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={11}>
              <Vercel xlinkTitle="true" />
            </SRG2>
            Vercel
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={11}>
              <Lighthouse xlinkTitle="true" />
            </SRG2>
            Lighthouse
          </div>

          {/* Miscellaneous */}
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={9}>
              <Microsoftword xlinkTitle="true" />
            </SRG2>
            MS Word
          </div>
          <div className="skill_item">
            <SRG2 type="column" noOfColumn={4} index={10}>
              <Microsoftpowerpoint xlinkTitle="true" />
            </SRG2>
            MS Powerpoint
          </div>
        </div>

        <ServiceIntro />
      </div>
    </section>
  );
};

export default HomeSkills;
