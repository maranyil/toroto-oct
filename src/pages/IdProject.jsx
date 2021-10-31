import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/navbar/Footer';
import Navbar from '../components/navbar/Navbar';
import Projectinfo from '../components/projects-id/Projectinfo';
import ProjectProblem from '../components/projects-id/ProjectProblem';

const IdProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  const { id } = useParams();

  const apiURL = `https://fieldops-api.toroto.mx/api/projects/${id}`;

  useEffect(() => {
    fetch(apiURL, {
      method: "GET",
      mode: 'cors',
      headers: Headers
    })
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setProjects(data.data[0])
    })
    .catch(error => {
      console.log("oh no", error);
      setErr(error)
    })
    .finally(() => {
      setLoading(false)
      console.log(projects);
    })
  }, [])


  return (
    <div>
      <Navbar />
      {loading ? <h1>Cargando...</h1> : (
        <div className="IdProjects">
          <Projectinfo projects={projects}/>
          <ProjectProblem projects={projects}/>
        </div>
      
      )}
      
      <Footer />
    </div>
  );
};

export default IdProject; 
