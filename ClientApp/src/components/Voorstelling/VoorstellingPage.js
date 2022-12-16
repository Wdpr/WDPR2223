import React from 'react'
import { VoorstellingPageCard } from './VoorstellingPageCard';
import AlleVoorstellingen from './AlleVoorstellingen';

import bannerFoto from '../../assets/theaterHomePic.jpg';

export class VoorstellingPage extends React.Component{
    static displayName = VoorstellingPage.name

    render(props) {
        const voorstellingElementen = AlleVoorstellingen.map(voorstelling => {
        return (     
            <VoorstellingPageCard 
                naamVanVoorstelling={voorstelling.naamVanVoorstelling}
                img={voorstelling.img}
                naam={voorstelling.naam}
                locatie={voorstelling.locatie}
                datum={voorstelling.datum}
                tijd={voorstelling.tijd}
                prijs={voorstelling.prijs}
                genre={voorstelling.genre}
            />
        )})

        return (
            <div>
                <img className='bannerFoto' src={bannerFoto}  alt="Theater" />
                <div>
                    {voorstellingElementen}
                </div>
            </div>
        )
}
}