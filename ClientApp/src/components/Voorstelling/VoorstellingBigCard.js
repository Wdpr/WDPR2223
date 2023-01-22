import React from 'react'
import { useNavigate } from "react-router-dom";

export function VoorstellingBigCard({ info }) {
    const navigate = useNavigate();


    function handleClick() {
        navigate('/voorstelling/' + info.id, { state: info })
    }

    const datum = new Date(info.datumDateTime);
    const alleenDatum = datum.toLocaleDateString();

    const tijd = new Date(info.tijdDateTime);
    const options = {hour: 'numeric', minute: 'numeric', hour12: false};
    const alleenTijd = tijd.toLocaleTimeString([],options);

    const dagen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    const dag = dagen[datum.getDay()];

    return (
        <div className='testenCards' >
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
                        <li><b>{info.artiest.naam}</b></li>
                        
                        <li>{info.genre}</li>
                    </ul>
                </div>
                <div className='cardInfoPrijs'>
                    <ul>
                        <li>
                            <button data-id={info.id} className='buttonNaarVoorstelling' onClick={() => handleClick()}>Toon Info</button>
                        </li>
                        <li>v.a. €{info.prijs}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
