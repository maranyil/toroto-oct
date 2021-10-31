import React from 'react';
import medal from '../../assets/png/service_icon.png'


const Projectinfo = ({projects}) => {
 
    return (
        <div className="projectinfo">
          <div className="p-grid">
          <div className="project-text">
            <h6 className="p-location">{projects.location}</h6>
            <h4 className="p-name">{projects.name}</h4>
          </div>
          <div className="s-container">
          {projects['services'].map((service) => (
            <div className="s-btn"><img className="limage" src={medal} alt="medal"/>{service}</div>
          ))}
          </div>
          <p>{projects.description}</p>
          </div>

            <img className="pimage" src={projects.images['0']}></img>
        </div>
    )
}

export default Projectinfo
