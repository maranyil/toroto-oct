import React, { useEffect } from 'react';
import  { useHistory } from 'react-router-dom';
import medal from '../../assets/png/service_icon.png';
import AOS from 'aos';

const ProjectCard = ({ project }) => {
 
  let imgArray = project.images;
  let randomI = Math.floor(Math.random() * 5);
  
  const history = useHistory();

  const goToProject = (e) => {
    e.preventDefault();
    history.push(`/proyectos/${project.id}`)
  }

  useEffect(() => {
    AOS.init({
      duration : 1800
    });
  }, []);

  return (
    <div className="project-card" key={project.id} data-aos="flip-left">
      
      <img className="card-img" src={imgArray[randomI]} alt="Some about Toroto Projects"/>
      <div className="card-info">
        <h6 className="p-location">{project.location}</h6>

        <h4 className="p-name">{project.name}</h4>

        <p>{project.description}</p>

        <div className="service-container">
          {project.services.slice(0, 2).map((service) => (
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
