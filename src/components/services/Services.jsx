import React, { useState } from 'react'
import './services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Software <br /> Developer
            </h3>
            <span className="services__button"onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
              <div className="services__model-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times
                 services__model-close"></i>

                <h3 className="services__model-title">Software Developer</h3>
                <p className="services__model-description">
                I've worked on diverse projects, covering frontend, backend, and system-level development.
                </p>
                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I use combination of Python and React.js for my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I have used RabbitMQ for massage queueing in my project.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I have worked on Iot Solution using Raspberry Pi.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I have worked with open-cv for image processing and OCR(Optical Character Recognition).
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I have made Employee monitoring system using Python and React.js.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web Design <br /> and Development
            </h3>
            <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
              <div className="services__model-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times
                 services__model-close"></i>

                <h3 className="services__model-title">
                Web Design and Development
                </h3>
                <p className="services__model-description">
                I have worked on various projects in React.js with Python as backend.
                </p>
                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I leverage the potent combination of React.js and FastAPI for my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I implement JWT for authentication in my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I utilize Chart.js for effective data visualization in my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I employ Bootstrap, Tailwind CSS, and Shadcn for styling in my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I integrate Redux for efficient state management in my projects.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Full Stack <br /> Developer
            </h3>
            <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
              <div className="services__model-content">
                <i onClick={() => toggleTab(0)}className="uil uil-times
                 services__model-close"></i>

                <h3 className="services__model-title">
                  Full Stack Developer
                </h3>
                <p className="services__model-description">
                I have worked on both frontend and backend projects.
                </p>
                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I use combination of Python and React.js for my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I know Django, Flask and FastAPI for backend development.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I know SQL and NoSQL databases like PostgreSQL, MongoDB, and Redis.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I know Docker and Docker Compose for containerization of my projects.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                    I know Git and Git CI for version control and continuous integration of my projects.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Services
