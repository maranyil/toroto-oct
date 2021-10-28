import React from 'react';
import  { useHistory } from 'react-router-dom';
import medal from '../../assets/png/service_icon.png';

const ProjectCard = ({ project }) => {
  let imgArray = project.images;
  let randomI = Math.floor(Math.random() * 5);
  
  const history = useHistory();

  const goToProject = (e) => {
    e.preventDefault();
    history.push(`/proyectos/${project.id}`)
  }

  return (
    <div className="project-card" key={project.id}>
      <img className="card-img" src={imgArray[randomI]} alt="Some about Toroto Projects"/>
      <div className="card-info">
        <h6>{project.location}</h6>

        <h4>{project.name}</h4>

        <p>{project.description}</p>

        <div className="service-container">
          {project.services.map((service) => (
            <div className="services-btn"><img src={medal} alt="logo"/> {service}</div>
          ))}
        </div>
        
        <button className="full-view" value={project.id} onClick={goToProject}> 
          Ver proyecto completo
          </button>
        
      </div>
    </div>
  );
};

export default ProjectCard;
