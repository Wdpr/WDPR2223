import React from "react";
import StoelKiezen from './StoelKiezen';
import '../../Styles/StoelenStyle.css';

export function StoelKiezenPage(props) {

  return (
    <div>

      <div>
        <div className="beginBanner">
            <div className="beginBannerText">
              <h4>Theater</h4>
              <h1>Laak</h1>
            </div>
          </div>
      </div>

      <div className="telefoonText">
        <p>Wilt u liever hulp bij het reserveren van stoelen? Neem contact op via ons <b>telefoonnummer: 070 393 33 48</b> </p>
        <div>    
            <StoelKiezen voorstelling={props.voorstelling}/>
          </div>
      </div>

    </div>
  );
}