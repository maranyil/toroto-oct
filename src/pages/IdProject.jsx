import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/navbar/Footer';
import Navbar from '../components/navbar/Navbar';
import ProjectGallery from '../components/projects-id/ProjectGallery';
import ProjectImplementation from '../components/projects-id/ProjectImplementation';
import Projectinfo from '../components/projects-id/Projectinfo';
import ProjectProblem from '../components/projects-id/ProjectProblem';
import ProjectImpact from '../components/projects-id/ProjectImpact';
import MapCard from '../components/mapbox/MapCard';
import ProjectMap from '../components/projects-id/ProjectMap';

const IdProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  const { id } = useParams();

  const apiURL = `https://fieldops-api.toroto.mx/api/projects/${id}`;

  useEffect(() => {
    fetch(apiURL, {
      method: 'GET',
      mode: 'cors',
      headers: Headers,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setProjects(data.data[0]);
      })
      .catch((error) => {
        console.log('oh no', error);
        setErr(error);
      })
      .finally(() => {
        setLoading(false);
      }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="IdProjects">
          <Projectinfo projects={projects} />
          <ProjectProblem projects={projects} />
          <ProjectImplementation projects={projects} />
          <ProjectImpact projects={projects} />
          <ProjectMap projects={projects} />
          <ProjectGallery projects={projects} />
          <div className="in-id">
            <MapCard />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default IdProject;
