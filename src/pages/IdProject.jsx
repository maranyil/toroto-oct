import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const useInfo = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState();
    const { id } = useParams();

    const apiURL = `https://fieldops-api.toroto.mx/api/projects/${id}`


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
        .then(projects => {
          setProjects(projects.data[0])
        })
        .catch(error => {
          console.log("oh no", error);
          setErr(error)
        })
        .finally(() => {
          setLoading(false)
        })
      }, []);
      return projects;
}

const IdProject = () => { 
    const projects = useInfo();   

   

    return (
        <div>
            <h1>{projects.name}</h1>
            <img src={projects.images[0]} />
        </div>
    )
}

export default IdProject
