import React from 'react';
import Footer from '../components/navbar/Footer';
import Navbar from '../components/navbar/Navbar';
import ProjectsG from '../components/projects-all/ProjectsG';

const Projects = ({ projects, setProjects, loading }) => {
  return (
    <div className="Projects-all">
      <Navbar />
      <ProjectsG
        projects={projects}
        setProjects={setProjects}
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default Projects;
