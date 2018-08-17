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
        if (data.hasOwnProperty) {
          // Object.keys(data).forEach((key,index) =>
          data.jobs.forEach((key,index) => jobs.push()); 
        }
        this.setState({ data });
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main data={this.state.data} />
      </div>
    )
  }
}

export default App;
