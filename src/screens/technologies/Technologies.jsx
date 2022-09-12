import React from 'react';
import './technologies.css';
import DevIcon from "devicon-react-svg";
import { techs } from '../../Helpers/techs';



function Technologies() {
  return (
    <div className='technologies-containter' id='technologies'>
        <div>
            <h1 style={{textAlign: 'center'}}>Technologies That I Use</h1>
        </div>
        <div className="tech-card-container">
            {techs.map((e, index) => {
                return(
                    <div key={index} className="tech-card">
                        <DevIcon className='techIcons' icon={e.iconName} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Technologies