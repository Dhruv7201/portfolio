import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleTabs, setToggleTabs] = useState(2);

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  const experienceData = [
    {
      title: "Python Developer",
      subtitle: "Qtech365 (Msbc Group)",
      calendar: "Jan 2024 - Present",
    },
    {
      title: "Associate Software Engineer",
      subtitle: "Ethics InfoTech",
      calendar: "Aug 2023 - Jan 2024",
    },
    {
      title: "Trainee Software Engineer",
      subtitle: "Ethics InfoTech",
      calendar: "Mar 2023 - Aug 2023",
    },
  ];

  const educationData = [
    {
      title: "Bachelor's Degree",
      subtitle: "Parul University",
      calendar: "2020 - 2023",
    },
    {
      title: "Diploma Computer Engineering",
      subtitle: "Parul Technology",
      calendar: "2016 - 2019",
    },
  ];

  const renderQualificationData = (data) => {
    return data.map((item, index) => (
      <div className="qualification__data" key={index}>
        {index % 2 !== 0 && <div></div>}
        {index % 2 !== 0 && 
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
        }

        <div>
          <h3 className="qualification__title">{item.title}</h3>
          <span className="qualification__subtitle">{item.subtitle}</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i> {item.calendar}
          </div>
        </div>

        {index % 2 === 0 && (
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Click on the tabs</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleTabs === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleTabs === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleTabs === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderQualificationData(experienceData)}
          </div>

          <div
            className={
              toggleTabs === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderQualificationData(educationData)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;