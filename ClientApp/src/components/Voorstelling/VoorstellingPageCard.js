import React from 'react'
import { useNavigate } from 'react-router-dom';



export const VoorstellingPageCard = (props) => {
    return (
        <div >
        <h1 className='pageCardTitel'>{props.naamVanVoorstelling}</h1>
            <div className= 'voorstellingCard'>
                <img src={require ('../../assets/' + props.img)} alt='Foto van voorstelling'/>
                    <div className='cardDatumInfo'>
                        <ul>
                            <li>{props.tijd}</li>
                            <li>{props.locatie}</li>
                            <li>{props.datum}</li>
                        </ul>
                    </div>
                    <div className='cardVoorstellingInfo'>
                    <ul>
                            <li>{props.naam}</li>
                            <li>{props.genre}</li>
                        </ul>
                    </div>
                    <div className='cardInfoPrijs'>
                        <ul>
                            <li><button>Toon Info</button></li>
                            <li>{props.prijs}</li>
                        </ul>
                    </div>
            </div>
        </div>
        )  
}


//{`../../assets/${props.img}`}