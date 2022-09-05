import React from 'react';
import './header.css'
import Typed from 'react-typed';

function Header() {
  return (
    <div className='main-header'>
        <h1>Who am I?</h1>
        <Typed 
            strings={[
                '',
               "I'm a Full-Stack Web Developer",
                'A Baltimore Ravens Fan',
                "I'm a Front-end developer",
                "I'm a Back-end developer",
                "I'm an animal lover",
                "I'm a Software Engineer",
                'Or simply put!',
                "I'm a coder who loves animals and football!",
                '']}
              typeSpeed={40}
              backSpeed={50}
              loop
        />
    </div>
  )
}

export default Header