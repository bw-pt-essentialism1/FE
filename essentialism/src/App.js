import React from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route } from "react-router-dom";
import Onboarding from './components/Onboarding';
import Values from './components/Values';
import PickThree from './components/PickThree';
import PickValues from "./components/PickValues"
import ExplainValues from "./components/ExplainValues"
import ListValues from './components/ListValues';
import ProjectList from './components/ProjectList';
import AddedProjects from './components/AddedProjects';
import ProjectValues from './components/ProjectValues';
import Home from './dashboard/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/values" component={Values} />
      <Route exact path="/pick-three" component={PickThree} />
      <Route exact path="/pick-values" component={PickValues} />
      <Route exact path="/explain-values" component={ExplainValues} />
      <Route exact path="/list-values" component={ListValues} />
      <Route exact path="/project-list" component={ProjectList} />
      <Route exact path="/added-projects" component={AddedProjects} />
      <Route exact path="/project-values" component={ProjectValues} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
