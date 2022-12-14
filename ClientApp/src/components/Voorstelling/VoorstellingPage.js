import React from 'react'
import { VoorstellingPageCard } from './VoorstellingPageCard';

import cardFoto from '../../assets/guido-weijers.jpg';
import lubachFoto from '../../assets/lubach.jpg';

export class VoorstellingPage extends React.Component{
    static displayName = VoorstellingPage.name

    render(props) {
        return (
        <div >
            <VoorstellingPageCard 
                naamVanVoorstelling='Guido de legend'
                img={cardFoto}
                naam='Guido Weijers'
                locatie='Theater de Laak'
                datum='Zaterdag 12/12/2020'
                tijd='20:00'
                prijs='€ 20'
                genre='Comedy'
            />
            <VoorstellingPageCard
                naamVanVoorstelling='Lubach de grote' 
                img={lubachFoto}
                naam='Arjen Lubach'
                locatie='Theater de Laak'
                datum='Dinsdag 18/10/2022'
                tijd='22:30'
                prijs='€ 17,50'
                genre='Comedy'
            />
        </div>
        )
    }
}