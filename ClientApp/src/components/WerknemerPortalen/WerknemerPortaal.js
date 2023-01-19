import React from "react";
import VoegArtiestToeAanLijst from "../../Pages/VoegToe/VoegArtiestToePage";
import VoorstellingAdding from "../../Pages/VoegToe/VoegVoorstellingToePage";
import VoegZaalToe from "../../Pages/ZalenToevoegen/ZaalAdd";
import { useState } from "react";




export function WerknemerPortaal(){

    const [showArtiest, setShowArtiest] = useState(false);
    const [showZaal, setShowZaal] = useState(false);
    const [showVoorstelling, setShowVoorstelling] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.innerText === "Artiest toevoegen") setShowArtiest(!showArtiest);
        if (e.target.innerText === "Zaal toevoegen") setShowZaal(!showZaal);
        if (e.target.innerText === "Voorstelling toevoegen") setShowVoorstelling(!showVoorstelling);
    };

    return (
        <div>
            <h1>Werknemer portaal</h1>
            <br />

            <button onClick={handleClick}>Artiest toevoegen </button>
            <button onClick={handleClick}>Zaal toevoegen </button>
            <button onClick={handleClick}>Voorstelling toevoegen </button>
            <br />
            <br></br>
            {showArtiest && <VoegArtiestToeAanLijst />}
            {showZaal && <VoegZaalToe />}
            {showVoorstelling && <VoorstellingAdding />}

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default WerknemerPortaal;