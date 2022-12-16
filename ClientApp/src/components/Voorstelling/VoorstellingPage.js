import React from 'react'
import { VoorstellingPageCard } from './VoorstellingPageCard';
import AlleVoorstellingen from './AlleVoorstellingen';

import bannerFoto from '../../assets/theaterHomePic.jpg';

export class VoorstellingPage extends React.Component{
    static displayName = VoorstellingPage.name

    constructor(props) {
        super(props);
        this.state = { lijstMetVoorstellingen: [], loading: true };
      }
    
      componentDidMount() {
        this.populateVoorstellingenData();
      }

      static renderCards(lijstMetVoorstellingen) {
        return (
            <h1>{lijstMetVoorstellingen[1]}</h1>
        //   <table className='table table-striped' aria-labelledby="tabelLabel">
        //     <thead>
        //       <tr>
        //         <th>Date</th>
        //         <th>Temp. (C)</th>
        //         <th>Temp. (F)</th>
        //         <th>Summary</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {lijstMetVoorstellingen.map(voorstellingen =>
        //         <tr key={voorstellingen.Id}>
        //           <td>{lijstMetVoorstellingen.Id}</td>
        //         </tr>
        //       )}
        //     </tbody>
        //   </table>
        );
      }

    // render(props) {
    //     const voorstellingElementen = AlleVoorstellingen.map(voorstelling => {
    //     return (     
    //         <VoorstellingPageCard 
    //             naamVanVoorstelling={voorstelling.naamVanVoorstelling}
    //             img={voorstelling.img}
    //             naam={voorstelling.naam}
    //             locatie={voorstelling.locatie}
    //             datum={voorstelling.datum}
    //             tijd={voorstelling.tijd}
    //             prijs={voorstelling.prijs}
    //             genre={voorstelling.genre}
    //         />
    //     )})
    render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : VoorstellingPage.renderCards(this.state.forecasts);
    
        return (
          <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
          </div>
        );
      }

        // return (
        //     <div>
        //         <img className='bannerFoto' src={bannerFoto}  alt="Theater" />
        //         <div>
        //             {voorstellingElementen}
        //         </div>
        //     </div>
        // )
//}
    async populateVoorstellingenData() {
    const response = await fetch('api/voorstelling');
    //console.log(await response.json());
    const data = await response.json();
    this.setState({ lijstMetVoorstellingen: data, loading: false });
  }

}