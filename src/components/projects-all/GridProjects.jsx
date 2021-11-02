import React from 'react';

import ProjectCard from './ProjectCard';

const GridProjects = ({projects, loading}) => {
  

  return (
  <div className="cargando">
    {loading ? <h1>Cargando...</h1> : (
      <div className="grid-projects">
    {projects &&
      projects.map((project) => (
        <ProjectCard 
        key={project.id}
        project={project}/>   
     ))}
     </div>
    )}
  </div>
  );
};

export default GridProjects;
