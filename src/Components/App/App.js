import React from 'react';
// import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

class App extends React.Component {
  state = {
    path: '/',
    data: {}
  }

  componentDidMount() {
    // axios.get('/data.json')
    //   .then(res => {
    //     const data = res.data;
    //     this.setState({ data });
    //   })
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
