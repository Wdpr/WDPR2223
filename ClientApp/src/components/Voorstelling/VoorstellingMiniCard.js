import React from 'react'
import { useNavigate } from "react-router-dom";
import img from '../../assets/guido-weijers.jpg'
import { useNavigate } from 'react-router-dom';

export function VoorstellingMiniCard ({info}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/voorstelling/' + info.id, { state: info })
    }
    
    return (


         <button className='buttonInvisible' onClick={() => handleClick()}>
            <div  className='voorstellingMiniCard'>
                <img src={img} alt={info.naam} />
                <p>{info.naam}</p>
            </div >
        </button>
        
    )
}