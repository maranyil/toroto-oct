import React from 'react';
import medal from '../../assets/png/service_icon.png'


const Projectinfo = ({projects}) => {
  let randomI = Math.floor(Math.random() * 5);
    return (
        <div className="projectinfo">
          <div className="p-grid">
          <div className="project-text">
            <h3 className="p-big">{projects.location}</h3>
            <h1 className="p-name">{projects.name}</h1>
          </div>
          <div className="s-container">
          {projects['services'].map((service) => (
            <div className="s-btn"><img className="limage" src={medal} alt="medal"/>{service}</div>
          ))}
          </div>
          <p>{projects.description}</p>
          </div>

            <img className="pimage" src={projects.images[randomI]}></img>
        </div>
    )
}

export default Projectinfo
