import React, { Component } from 'react';
import './App.css';

import { get } from './services/graphql-api';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { data : { 
      hello : greeting,
      aCoupleStuff: us,
      randomPercent
    } } = await get`
    query: {
      hello,
      randomPercent,
      aCoupleStuff {
        babs,
        me
      }
    }`;
    this.setState({ greeting, us, randomPercent });
  }

  render() {
    const { greeting, us, randomPercent } = this.state;
    return (
      <div className="App">
        <h1>{greeting}</h1>
        <i>here's a random percentage</i>
        <p>{randomPercent}%</p>
        <i>brought to you by</i>
        {us &&
          <p>{us.me} & {us.babs}</p>
        }
      </div>
    );
  }
}

export default App;
