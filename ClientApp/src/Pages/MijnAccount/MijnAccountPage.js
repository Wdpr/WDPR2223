import React from 'react';
import MijnGegevens from './MijnGegevens';
import '../../Styles/MijnAccountStyle.css';

export class MijnAccountPage extends React.Component {
    static displayName = MijnAccountPage.name


    render() {
        return (
            <div>
                <div className="beginBanner">
                    <div className="beginBannerText">
                        <h4>Theater</h4>
                        <h1>Laak</h1>
                    </div>
                </div>
                <div>
                    <MijnGegevens />
                </div>
            </div>
        )
    }

}