import React from 'react'

export function VoorstellingBigCard({info}) {

    return (
        <div >
            <h1 className='pageCardTitel'>{info.naam}</h1>
            <div className='voorstellingCard'>
                {/* <img src={require('../../assets/' + info.img)} alt='Foto van voorstelling' /> */}
                <div className='cardDatumInfo'>
                    <ul>
                        <li>{info.tijd}</li>
                        {/* <li>{info.locatie}</li> */}
                        <li>{info.datum}</li>
                    </ul>
                </div>
                <div className='cardVoorstellingInfo'>
                    <ul>
                        <li>{info.naam}</li>
                        <li>{info.genre}</li>
                    </ul>
                </div>
                <div className='cardInfoPrijs'>
                    <ul>
                        <li><button>Toon Info</button></li>
                        <li>{info.prijs}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
