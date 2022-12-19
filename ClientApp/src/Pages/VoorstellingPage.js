import React from 'react'
import { VoorstellingBigCard } from '../components/Voorstelling/VoorstellingBigCard';
import AlleVoorstellingen from '../components/Voorstelling/AlleVoorstellingen';

import bannerFoto from '../assets/theaterHomePic.jpg';

export class VoorstellingPage extends React.Component {
    static displayName = VoorstellingPage.name

    constructor(props) {
        super(props);
        this.state = { voorstellingen: [], loading: true };
    }

    async componentDidMount() {
        let response = await fetch('api/Voorstelling');
        let data = await response.json();
        this.setState({ voorstellingen: data, loading: false });
    }

    render(props) {
        const voorstellingElementen = this.state.voorstellingen.map(voorstelling => {
            return (
                <VoorstellingBigCard naam={voorstelling.naam} tijd={voorstelling.tijd} genre={voorstelling.genre} />
            )
        })

        return (
            <div>
                <img className='bannerFoto' src={bannerFoto} alt="Theater" />
                <div>
                    {this.state.loading ? "loading..." : voorstellingElementen}
                </div>
            </div>
        )
    }
}