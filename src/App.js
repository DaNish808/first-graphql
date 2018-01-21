import React, { Component } from 'react';
import './App.css';

import { get } from './services/graphql-api';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    console.log(await get());
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
