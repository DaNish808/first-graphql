import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ thing: 'yo' });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
