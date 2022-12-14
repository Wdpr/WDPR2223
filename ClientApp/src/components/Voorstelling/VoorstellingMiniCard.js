import React from 'react'

export const VoorstellingMiniCard = (props) => {
    return (
        <>
        <a href='/voorstelling' className='voorstellingMiniCard'>
            <img src={props.img} alt={props.alt} />
            <span>{props.alt}</span>
        </a>
        </>
    )
}