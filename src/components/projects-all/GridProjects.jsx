import React, { useEffect, useState } from 'react';

import ProjectCard from './ProjectCard';

const GridProjects = ({projects, setProjects}) => {
  
  const [loading, setLoading] = useState(true);

  const [err, setErr] = useState();

  

  useEffect(() => {

    fetch('https://fieldops-api.toroto.mx/api/projects', {
      method: "GET",
      mode: 'cors',
      headers: Headers
    })
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
      throw response;
    })
    .then(projects => {
      setProjects(projects.data)
    })
    .catch(error => {
      console.log("oh no", error);
      setErr(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

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
