import React from "react";

const DataBased = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DataBase</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-data skill__logo"></i>
            <div>
              <h3 className="skills__name">Mysql</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-mongodb skill__logo"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-fast-forward skill__logo"></i>
            <div>
              <h3 className="skills__name">Redis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-data skill__logo"></i>
            <div>
              <h3 className="skills__name">SQLite3</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-postgresql skill__logo"></i>
            <div>
              <h3 className="skills__name">Postgresql</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-firebase skill__logo"></i>
            <div>
              <h3 className="skills__name">FireBase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBased;
