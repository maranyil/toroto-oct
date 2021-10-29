import React from 'react';
import Footer from '../components/navbar/Footer';
import Navbar from '../components/navbar/Navbar';
import ProjectsG from '../components/projects-all/ProjectsG';

const Projects = ({projects, setProjects}) => {
  
  return (
    <div className="Projects-all">
      <Navbar />
      <ProjectsG
      projects={projects}
      setProjects={setProjects} />
      <Footer />
    </div>
  );
};

export default Projects;
