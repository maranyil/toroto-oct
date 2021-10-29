import React from 'react';
import GridProjects from './GridProjects';


const ProjectsG = ({projects, setProjects}) => {
    return (
        <div id="project-section" className="projects-g">
         <GridProjects
         projects={projects}
         setProjects={setProjects}/>            
         
        </div>
    )
}

export default ProjectsG
