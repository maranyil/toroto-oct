import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import IdProject from './pages/IdProject';
import Main from './pages/Main';
import Projects from './pages/Projects';


function App() {

  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const [err, setErr] = useState();

  

  useEffect(() => {
    fetch('https://fieldops-api.toroto.mx/api/projects', {
      method: "GET",
      mode: 'cors',
      headers: Headers
    })
    .then(response => {
      if (response.status < 400) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setProjects(data.data)
    })
    .catch(error => {
      console.log("oh no", error);
      setErr(error)
    })
    .finally(() => {
      setLoading(false)
      sessionStorage.setItem('locals', projects)
    })// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Main projects={projects} setProjects={setProjects}/>}/>
        <Route exact path="/proyectos" render={() => <Projects projects={projects} setProjects={setProjects} loading={loading} err={err}/>}/>
        <Route exact path="/proyectos/:id" component={IdProject}/>
      </Switch>
    </Router>
  );
}

export default App;
