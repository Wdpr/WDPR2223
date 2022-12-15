import React from 'react'

export const VoorstellingPageCard = (props) => {
    return (
        <div >
        <h1 className='pageCardTitel'>{props.naamVanVoorstelling}</h1>
            <div className= 'voorstellingCard'>
                <img src={props.img} alt='Foto van voorstelling'/>
                    <div className='cardDatumInfo'>
                        <ul>
                            <li>{props.datum}</li>
                            <li>{props.tijd}</li>
                            <li>{props.locatie}</li>
                        </ul>
                    </div>
                    <div className='cardVoorstellingInfo'>
                    <ul>
                            <li>{props.naam}</li>
                            <li>{props.genre}</li>
                            <li>{props.locatie}</li>
                        </ul>
                    </div>
                    <div className='cardInfoPrijs'>
                        <ul>
                            <li><button>Toon Info</button></li>
                            <li>Prijs $5,00</li>

                        </ul>
                    </div>
            </div>
        </div>
        )
}