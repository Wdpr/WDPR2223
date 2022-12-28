import React, { useState } from "react";

export const ReserveringPage = () => {
    const [fakePay, setFakePay] = useState()

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
            <h1>ReserveringPage</h1>
            <button onClick={() => postReservering()}>klik voor de post</button>
            {fakePay ? <p dangerouslySetInnerHTML={{ __html: fakePay }}></p> : <p>geen fakePay</p>}

        </div>
    );
}