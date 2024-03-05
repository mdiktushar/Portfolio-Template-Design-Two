import React from "react";
import Skill from "./Skill/Skill";

const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              Ski
              <span>lls</span>
            </h2>
            <div className="line"></div>
            <p>
              <span>
                <strong>D</strong>
              </span>
              ive into my skill set – a curated collection of expertise designed
              to bring your projects to new heights.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="features-sec">
            {skills.map((item, i) => (
              <Skill key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
