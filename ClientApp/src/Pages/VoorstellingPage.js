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

    render() {
        
        return (
            <div>
                <img className='bannerFoto' src={bannerFoto} alt="Theater" />
                <div>
                    {this.state.loading ? "loading..." : this.state.voorstellingen.map(voorstelling => {
                        return (
                            <VoorstellingBigCard key={voorstelling.id} info={voorstelling} />
                        )
                    })}
                </div>
            </div>
        )
    }
}