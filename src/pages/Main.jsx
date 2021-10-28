import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Mapbox from '../components/mapbox/Mapbox';
import ProjectsG from '../components/projects/ProjectsG';
import Footer from '../components/navbar/Footer';

const Main = ({projects, setProjects}) => {
  return (
    <div className="Main">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ height: '70vh' }}>
          <Mapbox />
        </div>
      </div>
      <ProjectsG 
      projects={projects}
      setProjects={setProjects} />
      <Footer />
    </div>
  );
};

export default Main;
