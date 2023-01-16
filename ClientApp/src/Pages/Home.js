import React, { Component } from 'react';
import { VoorstellingMiniCard } from '../components/Voorstelling/VoorstellingMiniCard';

import imgCard from '../assets/guido-weijers.jpg';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      voorstellingen: []
    }
  }

  componentDidMount() {
    this.populateVoorstellingenData();
  }

  populateVoorstellingenData() {
    fetch('api/Voorstelling', {
      headers : {"Authorize": "Bearer "+ sessionStorage.getItem("token")}
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ voorstellingen: data, loading: false });
      });
  }

  render() {
    return (
      <>
        <div className="beginBanner">
          <div className="beginBannerText">
            <h4>Theater</h4>
            <h1>Laak</h1>
          </div>
        </div>
        {sessionStorage.getItem("gebruiker") == null ? <></> : <p>Ingelogd als: <span>{JSON.parse(sessionStorage.getItem("gebruiker")).userName}</span></p>}
        <br />
        <br />
        <br />
        <div className="voorstellingMiniCards">
          {this.state.loading ? <p><em>Loading...</em></p> : this.state.voorstellingen.map(voorstelling => {
            return <VoorstellingMiniCard voorstelling={voorstelling} />
          })}
        </div>
      </>
    );
  }
}
