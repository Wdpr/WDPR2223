import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ReserveringPage = () => {
    const navigate = useNavigate();
    const stoelen = JSON.parse(sessionStorage.getItem("rStoelen"))
    const prijs = sessionStorage.getItem("rPrijs")
    const voorstelling = sessionStorage.getItem("rVoorstelling")

    console.log(stoelen)

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
                "VoorstellingId": 1,
                "BezoekerUsername": gebruiker.userName,
                "TotaalPrijs": prijs,
                "Stoelen": stoelen
            })
        })
        .then(response => console.log(response))

    }

    return (
        <div>
            <h1>Reservering Pagina</h1>
            <div>
                <p>
                    U heeft {stoelen.length} stoelen geboekt. Voor de voorstelling: {voorstelling}
                    <br />
                    De stoelen zijn:
                    <br />
                    {stoelen.map((stoel, key) => <span key={key}>- rij: {stoel.rijnr+ 1}, stoel: {stoel.stoelnr+ 1} -</span>)}
                    <br />
                    U heeft een prijs van {prijs} euro
                </p>
                <span>Bent u zeker van uw reservering?</span>
            </div>
            <button onClick={() => naarBetaling()}>Bevestig en ga naar betaling</button>
            {fakePay ? <p dangerouslySetInnerHTML={{ __html: fakePay }}></p> : null}

        </div>
    );
}