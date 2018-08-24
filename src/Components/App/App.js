import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

class App extends React.Component {
  state = {
    // path: '/',
    jobs: [],
    skills: [],
    projects: []
  }

  componentDidMount() {
    axios.get('/data.json')
      .then(res => {
        const data = res.data;

        this.setState({ 
          jobs: data.jobs,
          skills: data.skills,
          projects: data.projects
        });
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main 
          jobs={this.state.jobs}
          skills={this.state.skills}
          projects={this.state.projects}
         />
      </div>
    )
  }
}

export default App;
