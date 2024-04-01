import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/dhruv.it.is" className="footer__social-link" target='_blank'>
                    <i className='uil uil-instagram'></i>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-modi-082219195/" className="footer__social-link" target='_blank'>
                    <i className='uil uil-linkedin'></i>
                </a>
                <a href="https://twitter.com/dhruv_modi7201" className="footer__social-link" target='_blank'>
                    <i className='bx bxl-twitter'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
