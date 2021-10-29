import React from 'react';
import medal from '../../assets/png/service_icon.png'


const Projectinfo = ({projects}) => {
  console.log(projects.services)
    return (
        <div className="projectinfo">
          <div className="project-text">
            <h6 className="p-location">{projects.location}</h6>
            <h4 className="p-name">{projects.name}</h4>
            <p>{projects.description}</p>

            {/*<div className="service-container">
          {projects.services.map((service) => (
            <div className="services-btn"><img src={medal} alt="logo"/> {service}</div>
          ))}
          </div>*/}
          </div>

            {/*<img src={projects.images[0]}></img>*/}
        </div>
    )
}

export default Projectinfo
