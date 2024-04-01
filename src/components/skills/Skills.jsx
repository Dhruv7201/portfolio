import React from "react";
import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DataBased from "./DataBased";
import Tools from "./Tools";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tech Stack</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <BackEnd />
        <FrontEnd />
        <DataBased />
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
