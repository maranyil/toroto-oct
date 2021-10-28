import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import IdProject from './pages/IdProject';
import Main from './pages/Main';
import Projects from './pages/Projects';


function App() {

  const [projects, setProjects] = useState();
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Main projects={projects} setProjects={setProjects}/>}/>
        <Route exact path="/proyectos" render={() => <Projects projects={projects} setProjects={setProjects}/>}/>
        <Route exact path="/proyectos/:id" component={IdProject}/>
      </Switch>
    </Router>
  );
}

export default App;
