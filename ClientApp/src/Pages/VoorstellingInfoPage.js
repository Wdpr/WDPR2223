import React from 'react'

import bannerFoto from '../assets/theaterHomePic.jpg';

export class VoorstellingInfoPage extends React.Component {
    static displayName = VoorstellingInfoPage.name

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        let response = await fetch('api/Voorstelling');
        let data = await response.json();
        this.setState({ voorstellingen: data, loading: false });
    }

    render() {
        
        return (
            <div className="beginBanner">
          <div className="beginBannerText">
            <h4>Theater</h4>
            <h1>Laak</h1>
          </div>
        </div>
        )
    }
}