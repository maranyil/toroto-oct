import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/proyectos" component={Projects}></Route>
      </Switch>
    </Router>
  );
}

export default App;
