import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

class App extends React.Component {
  state = {
    // path: '/',
    jobs: [],
    skills: []
  }

  componentDidMount() {
    axios.get('/data.json')
      .then(res => {
        const data = res.data;

        this.setState({ 
          jobs: data.jobs,
          skills: data.skills
        });
      })
  }

  // getItems(data, name) {
  //   let items = []
  //   if (data.hasOwnProperty(name)) {
  //     Object.keys(data[name]).forEach(key => {
  //       items.push(data[name][key]); 
  //     });
  //   }
  //   return items;
  // }

  render() {
    return (
      <div className="app">
        <Header />
        <Main 
          jobs={this.state.jobs}
          skills={this.state.skills}
         />
      </div>
    )
  }
}

export default App;
