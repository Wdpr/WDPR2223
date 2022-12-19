import React from 'react'
import { VoorstellingBigCard } from '../components/Voorstelling/VoorstellingBigCard';
import AlleVoorstellingen from '../components/Voorstelling/AlleVoorstellingen';

import bannerFoto from '../assets/theaterHomePic.jpg';

export class VoorstellingPage extends React.Component{
    static displayName = VoorstellingPage.name

    render(props) {
        const voorstellingElementen = AlleVoorstellingen.map(voorstelling => {
        return (     
            <VoorstellingBigCard 
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