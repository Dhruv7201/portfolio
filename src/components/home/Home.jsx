import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Mobile from './Mobile'


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className='home__img'></div>

                <div className="home__phone">
                <Data />
                  
                </div>
            </div>
            <ScrollDown />
            <Mobile />
        </div>
    </section>
  )
}

export default Home
