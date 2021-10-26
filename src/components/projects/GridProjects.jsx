import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const GridProjects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  const apiURL = 'https://fieldops-api.toroto.mx/api/projects'
  let headers = {}

  /*const fetchData = async () => {
      const res = await
      fetch(apiURL)
      .then((res) => res.json());

      setProjects(res.data);
      setLoading(false)
  }

  useEffect(() => {
      fetchData();
  })*/

  useEffect(() => {
    fetch(apiURL, {
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
