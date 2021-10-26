import React, { useEffect, useState } from 'react';

const GridProjects = () => {
  const [projects, setProjects] = useState();
  const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=4'

  const fetchData = async () => {
      const response = await
      fetch(apiURL)
      .then((response) => response.json());

      setProjects(response)
  }

  useEffect(() => {
      fetchData();
  })

  return (
    <div className="carbono">
    {projects &&
      projects.map((project) => (
        <div className="item-container">
          Id:{project.id} <div className="title">Title:{project.name}</div>
        </div>
     ))}
  </div>
  );
};

export default GridProjects;
