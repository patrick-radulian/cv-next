import React from "react";

import "./resume.css";

import FrontEndExperience from "components/front-end-experience/front-end-experience";
import UXExperience from "components/ux-experience/ux-experience";
import Name from "components/name/name";
import Experience from "components/experience/experience";
import About from "components/about/about";
import Skills from "components/skills/skills";
import Tools from "components/tools/tools";
import Web from "components/web/web";
import Portrait from "components/portrait/portrait";
import Codepen from "components/codepen/codepen";
import GitHub from "components/github/github";
import Portfolio from "components/portfolio-link/portfolio-link";
import Box from "components/box/box";

const Resume: React.FC = () => {
    return (
        <React.Fragment>
            <About />
            <Portrait />
            <FrontEndExperience />
            <Name />
            <GitHub />
            <Codepen />
            <Portfolio />
            <Experience />
            <Skills />
            <UXExperience />
            <Web />
            <Tools />
            <Box className="disclaimer-home">
                <p className="disclaimer-home-text">Mobile version: work in progress</p>
            </Box>
        </React.Fragment>
    );
};

export default Resume;
