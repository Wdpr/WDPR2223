import React from 'react'
import { Link, NavLink } from "react-router-dom";
import img from '../../assets/guido-weijers.jpg'

export const VoorstellingMiniCard = ({voorstelling}) => {
    return (
        <NavLink tag={Link} to={'/voorstelling/'+voorstelling.id} className='voorstellingMiniCard'>
            <img src={img} alt={voorstelling.naam} />
            <p>{voorstelling.naam}</p>
        </NavLink >
    )
}