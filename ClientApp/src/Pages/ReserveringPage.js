import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const ReserveringPage = () => {
    const stoelen = JSON.parse(sessionStorage.getItem("rStoelen"))
    const prijs = sessionStorage.getItem("rPrijs")

    console.log(stoelen)

    const [fakePay, setFakePay] = useState()
    console.log(useLocation().pathname)

    // deze functie maakt gebruik van de fakepay api gegeven vanuit school
    function naarBetaling() {
        var details = {
            'amount': prijs,
            'reference': 'testReference',
            'url': '/suck'
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

    // handelt d knop "Bevestig en ga naar betaling"
    function postReservering() {
        const gebruiker = JSON.parse(sessionStorage.getItem("gebruiker"))
        if (gebruiker === null) {
            alert("U moet ingelogd zijn om een reservering te maken")
            
        }

        fetch("api/reservering", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "VoorstellingId": 1,
                "BezoekerUsername": 'peter',
                "TotaalPrijs": 80,
                "Stoelen": JSON.stringify([
                    {"rijnr": 1, "stoelnr": 1},
                    {"rijnr": 1, "stoelnr": 2},
                ])
            })
        })
        .then(response => console.log(response))

    }

    return (
        <div>
            <h1>Reservering Pagina</h1>
            <div>
                <p>
                    U heeft {stoelen.length} stoelen geboekt. Voor de voorstelling: {"'moet nog uitvinden hoe'"}
                    <br />
                    De stoelen zijn:
                    <br />
                    {stoelen.map((stoel, key) => <span key={key}>rij: {stoel.rij+ 1}, stoelnr: {stoel.stoel+ 1} - </span>)}
                    <br />
                    U heeft een prijs van {prijs} euro
                </p>
                <span>Bent u zeker van uw reservering?</span>
            </div>
            <button onClick={() => postReservering()}>Bevestig en ga naar betaling</button>
            {fakePay ? <p dangerouslySetInnerHTML={{ __html: fakePay }}></p> : null}

        </div>
    );
}