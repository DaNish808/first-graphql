import React, { Component } from 'react';
import Spotify from './components/Spotify';
import './App.css';

import { get } from './services/graphql-api';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { 
      data : { 
        hello : greeting,
        randomPercent,
        aCoupleStuff: us
      } 
    } = await get(`
      query {
        hello,
        randomPercent,
        aCoupleStuff {
          babs,
          me
        }
      }
    `);
    this.setState({ greeting, us, randomPercent });
  }

  onSubmitArtists = async e => {
    e.preventDefault();
    const data = await get(`
      query {
        spotify {
          albums (q:${JSON.stringify(e.target.artists.value.split(' ').join('%20'))})
        }
      }
    `);
    console.log(data);
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
        <Spotify onSubmit={this.onSubmitArtists}/>
      </div>
    );
  }
}

export default App;
