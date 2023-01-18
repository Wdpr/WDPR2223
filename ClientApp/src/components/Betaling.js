import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Betaling = () => {
    const navigate = useNavigate();
    const state = useLocation().state;

    return (
        <div>
            <h1>Betaling</h1>
            <div dangerouslySetInnerHTML={{__html: state.data}}></div>
        </div>
    )
}