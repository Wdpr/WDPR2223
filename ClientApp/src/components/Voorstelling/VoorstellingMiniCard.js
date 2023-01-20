import React from 'react'
import { useNavigate } from "react-router-dom";
import img from '../../assets/guido-weijers.jpg'

export const VoorstellingMiniCard = ({voorstelling}) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate("/Voorstelling/"+voorstelling.id, { state: voorstelling })
    }

    return (
        <button className='voorstellingMiniCard' onClick={(e) => handleClick(e)}>
            <img src={img} alt={voorstelling.naam} />
            <p>{voorstelling.naam}</p>
        </button >
    )
}