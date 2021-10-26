import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Mapbox  from '../components/mapbox/Mapbox';
import ProjectsG from '../components/projects/ProjectsG';

const Main = () => {
    return (
        <div className="Main">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, height: '70vh' }}>
          <Mapbox />
        </div>
      </div>
      <ProjectsG />
    </div>
    )
}

export default Main
