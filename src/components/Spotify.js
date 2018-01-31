import React, { Component } from 'react';

export default class Spotify extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <section className="spotify">
        <h2>Spotify</h2>
        <form onSubmit={onSubmit}>
          <fieldset>
            <label>artists</label>
            <input name="artists" type="search"/>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
    );
  }
}