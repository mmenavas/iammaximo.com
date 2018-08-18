import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

class App extends React.Component {
  state = {
    // path: '/',
    jobs: []
  }

  componentDidMount() {
    axios.get('/data.json')
      .then(res => {
        const data = res.data;
        let jobs = []
        if (data.hasOwnProperty('jobs')) {
          Object.keys(data.jobs).forEach(key => {
            jobs.push(data.jobs[key]); 
          });
        }
        this.setState({ 
          jobs: jobs.reverse()
        });
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main jobs={this.state.jobs} />
      </div>
    )
  }
}

export default App;
