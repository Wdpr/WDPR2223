import React from "react";
import { useState } from "react";
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

      <div className="container">
        <div>    
            <StoelKiezen voorstelling={props.voorstelling}/>
          </div>
      </div>

    </div>
  );
}