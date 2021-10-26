import React from 'react';
import { Link } from 'react-scroll';
import arrowdown from '../../assets/png/Vector.png';

const ProjectLink = () => {
    return (
        <div className="project-link">
            <h2>Ver lista completa de proyectos</h2>
            <Link to="project-section" 
            className="p-link"
            smooth={true}>
                <img src={arrowdown} alt="arrow down"></img>
            </Link>        
        </div>
    )
}

export default ProjectLink
