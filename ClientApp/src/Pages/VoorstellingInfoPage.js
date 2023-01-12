import React from 'react'

import img from '../assets/guido-weijers.jpg'

export class VoorstellingInfoPage extends React.Component {
    static displayName = VoorstellingInfoPage.name



    render() {
        return (
        <div className="posterBannerVoorstelling">
            <img className="posterBannerVoorstelling" src={img}/>
            <div className='container'>
                <h1 className='posterBannerVoorstellingText'>Guido the legend</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        )
    }
}