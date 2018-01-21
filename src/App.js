import React, { Component } from 'react';
import './App.css';

import { get } from './services/graphql-api';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { data : { hello : greeting } } = await get`
    query: {
      hello,
      randomPercent,
      aCoupleStuff {
        babs,
        me
      }
    }
    `;
    // const { data : { hello : greeting } } = await get();
    this.setState({ greeting });
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className="App">
        <h1>{greeting}</h1>
      </div>
    );
  }
}

export default App;
