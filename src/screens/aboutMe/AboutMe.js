import React from 'react'
import './aboutMe.css'
import me from '../../images/me.webp'


function AboutMe() {
  return (
    <div className="about-container" id="about-me">
        <div>
        <img src={me} alt="Pic of me" />
        </div>
        <div className="about_text">
            <h1>ABOUT ME</h1>
            <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </div>
  )
}

export default AboutMe