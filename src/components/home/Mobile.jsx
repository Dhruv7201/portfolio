import React from 'react'

const Mobile = () => {
  return (
    <div>
      <div className="home__mobile">
        <a href="#about" className="home__scroll-button button--flex">
        <i class='bx bx-mobile-alt home__scroll-phone'></i>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
      </div>
    </div>
  )
}

export default Mobile
