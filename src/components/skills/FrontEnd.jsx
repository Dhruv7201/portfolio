import React from "react";

const FrontEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-End Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5 skill__logo skill__logo"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-css3 skill__logo"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-tailwind-css"></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-javascript skill__logo"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-react skill__logo"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-redux skill__logo"></i>
            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
