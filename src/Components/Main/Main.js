import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Main.css';

const Main = props => (
  <main>
    <div className="container">
      <Switch>
        {/* <Route exact path='/' render={ () => <Home data={props.data} /> }/> */}
        <Route exact path='/' component={Home} /> }/>
        <Route path='/resume' render={ () => <Resume jobs={props.jobs} skills={props.skills} /> }/>
        <Route path='/projects' render={ () => <Projects projects={props.projects} /> }/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  </main>
);

export default Main;
