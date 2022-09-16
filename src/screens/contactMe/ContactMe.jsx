import React from 'react';
import './contactMe.css';
import { navigationLinks } from '../../Helpers/navigationLinks';

function createLinks () {
    return navigationLinks.map((e, index) => (

        <p key={index}><a href={e.ref}>{e.name}</a></p>
    ))
}


function ContactMe() {
  return (
    <div className="contact-container"  id="contact">
        <div className="contact-data-links">
            <div>
                <p>Springfield, Illinois</p>
                <p>Cody Mundy</p>
                <a href='mailto:codymundy5@gmail.com'>codymundy5@gmail.com</a>
                <p><a href="https://www.linkedin.com/in/cody-mundy-b2742a98/">LinkedIn</a></p>
                </div>
                <p><a href="https://github.com/HeavyArms0511">GitHub</a></p>
                  
                <div>
                   {createLinks()}
            </div>
         </div>
    </div>
  )
}

export default ContactMe