import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const ReserveringPage = () => {
    const stoelen = JSON.parse(sessionStorage.getItem("rStoelen"))
    const prijs = sessionStorage.getItem("rPrijs")

    console.log(stoelen)

    const [fakePay, setFakePay] = useState()
    console.log(useLocation().pathname)

    // deze functie maakt gebruik van de fakepay api gegeven vanuit school
    function postReservering() {
        var details = {
            'amount': '50',
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

    return (
        <div>
            <h1>Reservering Pagina</h1>
            <div>
                <p>
                    U heeft {stoelen.length} stoelen geboekt. Voor de voorstelling: {"'moet nog uitvinden hoe'"}
                    <br />
                    De stoelen zijn: 
                    <br />
                    {stoelen.map((stoel) => <span>rij: {stoel.rij}, stoelnr: {stoel.stoel} - </span>)}
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