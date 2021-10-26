import React from 'react';

const ProjectCard = ({ project, id }) => {
  let imgArray = project.images;
  console.log(imgArray);
  return (
    <div className="project-card" key={id}>
      <img className="card-img" src={project.images[1]}/>
      <div className="card-info">
        <h6>{project.location}</h6>

        <h4>{project.name}</h4>
        <p>{project.description}</p>

        <button>{project.services[0]}</button>
        <button>{project.services[1]}</button>
        <button className="full-view">Ver proyecto completo</button>
      </div>
      
    </div>
  );
};

export default ProjectCard;
