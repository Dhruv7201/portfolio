import React from "react";

const BackEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-End Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-python skill__logo"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-django skill__logo"></i>
            <div>
              <h3 className="skills__name">Django</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-bolt-circle skill__logo"></i>
            <div>
              <h3 className="skills__name">FastAPI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-flask skill__logo"></i>
            <div>
              <h3 className="skills__name">Flask</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-camera"></i>
            <div>
              <h3 className="skills__name">OpenCV</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-face-mask skill__logo"></i>
            <div>
              <h3 className="skills__name">IOT</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
