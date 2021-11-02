import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Mapbox from '../components/mapbox/Mapbox';
import ProjectsG from '../components/projects-all/ProjectsG';
import Footer from '../components/navbar/Footer';
import MobileV from '../components/mapbox/MobileV';

const Main = ({ projects, setProjects }) => {
  return (
    <div className="Main">
      <Navbar />
      <div className="mapbox-super-container">
        <div className="mapbox-sper-container">
          <Mapbox projects={projects} setProjects={setProjects} />
        </div>
      </div>
      <MobileV />
      <ProjectsG projects={projects} setProjects={setProjects} />
      <Footer />
    </div>
  );
};

export default Main;
