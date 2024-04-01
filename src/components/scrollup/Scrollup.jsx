import React from 'react'
import './scrollup.css'

const Scrollup = () => {
    window.addEventListener('scroll', () => {
        const scrollup = document.querySelector('.scrollup')
        if (window.scrollY > 560) {
            scrollup.classList.add('show-scrollup');
        }
        else {
            scrollup.classList.remove('show-scrollup');
        }
    }
    )
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup
