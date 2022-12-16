import React from 'react'

export const VoorstellingMiniCard = (props) => {
    return (
        <a href={'/voorstelling'+props.id} className='voorstellingMiniCard'>
            <img src={props.img} alt={props.alt} />
            <p>{props.alt}</p>
        </a >
    )
}