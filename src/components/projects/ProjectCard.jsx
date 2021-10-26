import React from 'react';
import ClampLines from 'react-clamp-lines';

const ProjectCard = ({ project, id }) => {
  
  let imgArray = project.images;
  let randomI = Math.floor(Math.random()*5);

  return (
    <div className="project-card" key={id}>
      <img className="card-img" src={imgArray[randomI]}/>
      <div className="card-info">
        <h6>{project.location}</h6>

        <h4>{project.name}</h4>
        
        <ClampLines 
        text={project.description}
        id="default"
        lines={3}
        ellipsis="..."
        moreText="Expand"
        lessText="Collapse"
        className="custom-class"
        innerElement="p"/>

        <button>{project.services[0]}</button>
        <button>{project.services[1]}</button>
        <button className="full-view">Ver proyecto completo</button>
      </div>
      
    </div>
  );
};

export default ProjectCard;
