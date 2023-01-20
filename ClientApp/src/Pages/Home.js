import React, { Component } from 'react';
import { VoorstellingMiniCard } from '../components/Voorstelling/VoorstellingMiniCard';

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
    fetch('api/Voorstelling')
      .then(response => response.json())
      .then(data => {
        this.setState({ voorstellingen: data, loading: false });
      });
  }

  render() {
    const filteredVoorstellingen = this.state.selectedGenre
      ? this.state.voorstellingen.filter()
      : this.state.voorstellingen;
    filteredVoorstellingen.sort((b, a) => new Date(a.datumDateTime) - new Date(b.datumDateTime));

    return (
      <>
        <div className="beginBanner">
          <div className="beginBannerText">
            <h4>Theater</h4>
            <h1>Laak</h1>
          </div>
        </div>
        {sessionStorage.getItem("gebruiker") == null ? <></> : <p>Ingelogd als: <span>{JSON.parse(sessionStorage.getItem("gebruiker")).username}</span></p>}
        <div className='HomePageInfoContainer'>
          <div className='tekstjesHomePage'>
            <div className='KleinTekstje'>
              <h2>OVER LAAKTHEATER</h2>
              <p>Laaktheater probeert kunst persoonlijk te maken. Dat betekent dat we kunst op zo veel verschillende manieren brengen dat er voor iedereen een mogelijkheid is het zich eigen te maken en te beleven. Dat kunst niet eng is of niet voor jou, maar dat kunst echt voor en van iedereen is. Als je maar een manier vindt of krijgt aangeboden die bij je past. </p>
            </div>
          </div>
          <div className='homeCardsContainer'>
            <div className="homeCards">
              <h1 >Nieuwste voorstellingen</h1>
              <div className="voorstellingMiniCards">
                {this.state.loading ? <p><em>Loading...</em></p> : this.state.voorstellingen.slice(0, 4).map(voorstelling => {
                  const datum = new Date(voorstelling.datumDateTime);
                  const plus300 = new Date().setDate(new Date().getDate() + 300);
                  if ((datum > new Date()) && (datum < plus300))
                    return <VoorstellingMiniCard key={voorstelling.id} voorstelling={voorstelling} />
                })}
              </div>
              <div >
                <br />
                <a className='LinkNaarProgrammering' href="/Voorstelling">Bekijk hier de volledige programmering</a>
              </div>
            </div>
          </div>
          <br />
          <div className='tekstjesHomePage'>
            <div className='KleinTekstje'>
              <h2>SAMEN UIT, SAMEN THUIS</h2>
              <p>Wij geven om Laak en haar bewoners en vinden dat kunst & cultuur voor iedereen toegankelijk moet zijn. Daarom kan je bij ons veel meer dan alleen naar een voorstelling kijken. Kom meedoen, een koffie drinken of een les volgen. Heb jij een goed idee? Wellicht kan Laaktheater je helpen! Zien we je binnenkort?</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
