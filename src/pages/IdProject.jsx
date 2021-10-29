import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/navbar/Footer';
import Navbar from '../components/navbar/Navbar';
import Projectinfo from '../components/projects-id/Projectinfo';

const useInfo = () => {
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
      .then((projects) => {
        setProjects(projects.data[0]);
      })
      .catch((error) => {
        setErr(error);
        console.log('oh no', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return projects;
};

const IdProject = () => {
  const projects = useInfo();


  return (
    <div className="IdProjects">
      <Navbar />
      <Projectinfo projects={projects}/>
      <Footer />
    </div>
  );
};

export default IdProject;
