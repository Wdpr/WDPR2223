import React from 'react'

export function VoorstellingBigCard({info}) {
    const datum = new Date(info.tijd);
    const alleenDatum = datum.toLocaleDateString();
    const alleenTijd = datum.toLocaleTimeString();
    const dagen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    const dag = dagen[datum.getDay()];

    return (
        <div >
            <h1 className='pageCardTitel'>{info.naam}</h1>
            <div className='voorstellingCard'>
                { <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt='Foto van voorstelling' /> }
                <div className='cardDatumInfo'>
                    <ul>
                        <li>{dag}</li>
                        <li>{alleenDatum}</li>
                        <li>{alleenTijd}</li>
                        
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
                        <li>€{info.prijs}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
