import React from 'react'

export async function VoorstellingBigCard(props) {

    // let response = await fetch('api/Voorstelling/' + props.idnr);
    // console.log(response)
    // let data = response.json();
    // console.log(data)

    return (
        <div>
            <h1>{props.naam}</h1>
            <p>
                {props.tijd}
            </p>
            <p>{props.genre}</p>
        </div>
    )

    // return (
    //     <div >
    //         <h1 className='pageCardTitel'>{data.naam}</h1>
    //         <div className='voorstellingCard'>
    //             {/* <img src={require('../../assets/' + data.img)} alt='Foto van voorstelling' /> */}
    //             <div className='cardDatumInfo'>
    //                 <ul>
    //                     <li>{data.tijd}</li>
    //                     {/* <li>{data.locatie}</li> */}
    //                     <li>{data.datum}</li>
    //                 </ul>
    //             </div>
    //             <div className='cardVoorstellingInfo'>
    //                 <ul>
    //                     <li>{data.naam}</li>
    //                     <li>{data.genre}</li>
    //                 </ul>
    //             </div>
    //             <div className='cardInfoPrijs'>
    //                 <ul>
    //                     <li><button>Toon Info</button></li>
    //                     <li>{data.prijs}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // )
}
