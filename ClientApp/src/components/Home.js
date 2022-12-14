import React, { Component } from 'react';
import theaterHomePic from '../assets/theaterHomePic.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div className="container">
          <img src={theaterHomePic} width="1300" height="500" alt="Theater" />
          <h3>Theater</h3>
          <h1>Laak</h1>
        </div>
        
      </>
    );
  }
}
