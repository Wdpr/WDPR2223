import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ReserveringPage = () => {
    const navigate = useNavigate();
    const state = useLocation().state;
    console.log(state)

    const stoelen = state.bestelling.stoelen
    const prijs = state.bestelling.prijs



    
    const [fakePay, setFakePay] = useState()

    // deze functie maakt gebruik van de fakepay api gegeven vanuit school
    function naarBetaling() {
        var details = {
            'amount': prijs,
            'reference': 'testReference',
            'url': '/api/reservering/fakepay'
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('https://fakepay.azurewebsites.net/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }
        ).then(response => response.text())
            .then(data => { console.log(data); setFakePay(data) })
    }

    // handelt de knop "Bevestig en ga naar betaling"
    function postReservering() {
        const gebruiker = JSON.parse(sessionStorage.getItem("gebruiker"))
        if (gebruiker === null) {
            alert("U moet ingelogd zijn om een reservering te maken")
            navigate("/login")
        }

        fetch("api/reservering", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "VoorstellingId": state.id,
                "BezoekerUsername": gebruiker.userName,
                "TotaalPrijs": prijs,
                "Stoelen": stoelen
            })
        })
        .then(response => console.log(response)
        )

    }

    return (
        <div>
            <h1>{state.naam}</h1>
            <div>
                
                <p>U staat op het moment om de volgende {stoelen.length} stoel(en) te reserveren:</p>
                    
                <div>
                {stoelen.map((stoel, key) => <ul key={key}>
                                                            <li>Stoel: {stoel.stoelnr+ 1}</li> 
                                                            <li>Rij: {stoel.rijnr+ 1}</li> 
                                                            <li>Rang: {stoel.categorie}</li> 
                                                            <li>Prijs: €{stoel.prijs}</li>
                                                            </ul>)}
                </div>
                <br></br>   
                <p>Dit komt op een totaalprijs van €{prijs}</p>   
                    
                
                <span>Bent u zeker van uw reservering?</span>
            </div>
            <button onClick={() => postReservering()}>Bevestig en ga naar betaling</button>
            {fakePay ? <p dangerouslySetInnerHTML={{ __html: fakePay }}></p> : null}

        </div>
    );
}