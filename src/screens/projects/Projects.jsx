import React from 'react';
import './projects.css';
import treasurehunt from '../../images/treasurehunt.gif'
import api from '../../images/api.png'



function Projects () {
   return( <div className="project_text"><h1> Projects </h1>
       <div className="treasure-container" >
         <div className="project-container">
             <a href="https://github.com/HeavyArms0511/wildlife-tracker-api"> <img src={api} className="api" alt="wildlife api"/></a>
             <p style={{fontSize:22}}>Wildlife Api</p>
             <p>An api I built that helps you track the sighting of any animal and logs it into a database so you may reference it later.</p>
            </div>
        <div className='project-container'>
            <a href="https://heavyarms0511.github.io/"><img src={treasurehunt} className='treasure' alt='first project'/></a>
             <p style={{fontSize:22}}>Treasure Hunt</p>
             <p>A treasure hunt game that is based on the movie  Army of Darkness that stars Bruce Campbell</p>
         </div>
        </div>
    </div>
   )
}


export default Projects