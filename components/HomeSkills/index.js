import React from 'react';
import { Html5, CssThree, Sass, Javascript, Bootstrap, Tailwindcss, ReactJs, Github, Figma, Microsoftword, Microsoftpowerpoint, Visualstudiocode, Redux, Nextdotjs, Materialui, Firebase } from '@icons-pack/react-simple-icons';
import ServiceIntro from './ServiceIntro';

const HomeSkills = () => {
    return (
        <section className="skill_page_wrapper">
            <div className="container skill_page">
                <h1 className="title_text text_center">Skills</h1>
                <div className="skill_page--grid">
                    <div className="skill_item">
                        <Html5 xlinkTitle="true" />
                        HTML5
                    </div>
                    <div className="skill_item">
                        <CssThree xlinkTitle="true" />
                        CSS3
                    </div>
                    <div className="skill_item">
                        <Sass xlinkTitle="true" />
                        SCSS
                    </div>
                    <div className="skill_item">
                        <Javascript xlinkTitle="true" />
                        JavaScript
                    </div>
                    <div className="skill_item">
                        <Bootstrap xlinkTitle="true" />
                        Bootstrap
                    </div>
                    <div className="skill_item">
                        <Tailwindcss xlinkTitle="true" />
                        TailwindCSS
                    </div>
                    <div className="skill_item">
                        <ReactJs xlinkTitle="true" />
                        React.js
                    </div>
                    <div className="skill_item">
                        <Github xlinkTitle="true" />
                        GitHub
                    </div>
                    <div className="skill_item">
                        <Figma xlinkTitle="true" />
                        Figma
                    </div>
                    <div className="skill_item">
                        <Microsoftword xlinkTitle="true" />
                        MS Word
                    </div>
                    <div className="skill_item">
                        <Microsoftpowerpoint xlinkTitle="true" />
                        MS Powerpoint
                    </div>
                    <div className="skill_item">
                        <Visualstudiocode xlinkTitle="true" />
                        VS Code
                    </div>

                    <div className="skill_item">
                        <Redux xlinkTitle="true" />
                        Redux
                    </div>
                    <div className="skill_item">
                        <Nextdotjs xlinkTitle="true" />
                        Next JS
                    </div>
                    <div className="skill_item">
                        <Materialui xlinkTitle="true" />
                        Material UI
                    </div>
                    <div className="skill_item">
                        <Firebase xlinkTitle="true" />
                        Firebase
                    </div>
                </div>

                <ServiceIntro />
            </div>
        </section>
    );
}

export default HomeSkills;
