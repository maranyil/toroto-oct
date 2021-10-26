import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const GridProjects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);
  const apiURL = 'https://fieldops-api.toroto.mx/api/projects'

  const fetchData = async () => {
      const response = await
      fetch(apiURL)
      .then((response) => response.json());

      setProjects(response.data);
      setLoading(false)
  }

  useEffect(() => {
      fetchData();
  })

  return (
  <div className="cargando">
    {loading ? <h1>Cargando...</h1> : (
      <div className="grid-projects">
    {projects &&
      projects.map((project, id) => (
        <ProjectCard 
        key={id}
        project={project}/>   
     ))}
     </div>
    )}
  </div>
  );
};

export default GridProjects;
