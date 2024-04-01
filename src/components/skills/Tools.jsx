import React from "react";

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Development Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-git skill__logo"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-docker skill__logo"></i>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-cable-car skill__logo"></i>

            <div>
              <h3 className="skills__name">Portainer</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-graphql skill__logo"></i>

            <div>
              <h3 className="skills__name">GraphQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-code-alt"></i>
            <div>
              <h3 className="skills__name">VIM</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-tux skill__logo"></i>

            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
