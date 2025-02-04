import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 years</span>
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Projects 12+</span>
        </div>
    </div>
  )
}

export default Info
