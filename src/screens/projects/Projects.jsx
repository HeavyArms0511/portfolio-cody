import React from 'react';
import './projects.css';
import treasurehunt from '../../images/treasurehunt.gif'
import api from '../../images/api.png'



function Projects () {
   return( <div className="project_text"><h1> Projects </h1>
       <div className="treasure-container">
       <a href="https://github.com/HeavyArms0511/wildlife-tracker-api"> <img src={api} className="api" alt="wildlife api"/></a>
        <div className='treasure-container'>
        <a href="https://heavyarms0511.github.io/"><img src={treasurehunt} className='treasure' alt='first project'/></a>
        </div>
        </div>
    </div>
   )
}


export default Projects