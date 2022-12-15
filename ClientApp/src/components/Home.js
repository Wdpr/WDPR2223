import React, { Component } from 'react';
import { VoorstellingMiniCard } from './Voorstelling/VoorstellingMiniCard';

import imgCard from '../assets/guido-weijers.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div className="beginBanner">
          <div className="beginBannerText">
            <h4>Theater</h4>
            <h1>Laak</h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div clasName="voorstellingCards">
          <VoorstellingMiniCard img={imgCard} alt="Guido Weijers" />
          <VoorstellingMiniCard img={imgCard} alt="Guido Weijers" />
          <VoorstellingMiniCard img={imgCard} alt="Guido Weijers" />
          <VoorstellingMiniCard img={imgCard} alt="Guido Weijers" />
        </div>
      </>
    );
  }
}
