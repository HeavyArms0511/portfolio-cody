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
            <p>Hello, My name is Cody Mundy.  I'm a military veteren, avid video game player, former correctional officer and train conductor turned full-stack web developer.  I have fallen in love with writing and working with code with emhpasis more on the back end.  With all the discipline and training I received from being in the military I know how to be resilient and keep working on difficult tasks.  Along with that I know how to work well in a team.  Lets work togehter and make programming a great experience!
            </p>
        </div>
    </div>
  )
}

export default AboutMe