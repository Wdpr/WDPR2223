import React, { useState } from "react";

export const RegistreerForm = () => {
    const [gebruikersnaam, setGebruikersnaam] = useState("");
    const [email, setEmail] = useState("");
    const [wachtwoord, setWachtwoord] = useState("");

    const emailEnWachtwoordControle = (e) => {
        if (email.includes("@") && email.includes(".")) {
            if (wachtwoord.length >= 6) {
                return true
            }
            alert("wachtwoord moet minimaal 6 karakters lang zijn");
        }
        else {
            alert("email is niet geldig");
        }
        return false
    }

    async function submitHandler(e) {
        e.preventDefault();

        if (!emailEnWachtwoordControle(e)) return
        console.log("email en wachtwoord zijn goed")

        fetch("api/bezoeker/registreer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Email: email,
                Gebruikersnaam: gebruikersnaam,
                Wachtwoord: wachtwoord,
                
            })
        }).then(response => {
            console.log(response)
            response.ok ? alert("U bent geregistreerd") : alert("Er is iets mis gegaan")
        })
    }

    return (
        <form className="loginFormulier" onSubmit={submitHandler}>
            <div >
                <label className="formFieldLabel">
                    Gebruikersnaam
                    <input className="formFieldInput" type="text" name="Voornaam" placeholder="Vul uw voornaam in" onChange={(e) => setGebruikersnaam(e.target.value)} />
                </label>
            </div>
            <div >
                <label className="formFieldLabel">
                    Email adres
                    <input className="formFieldInput" type="text" name="EmailAdress" placeholder="Vul uw E-mail in" onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <div>
                <label className="formFieldLabel">
                    Wachtwoord
                    <input className="formFieldInput" type="Wachtwoord" name="Password" placeholder="Vul uw wachtwoord in" onChange={(e) => setWachtwoord(e.target.value)} />
                </label>
            </div>
            <div>
                <button className='formFieldButton' type="submit">Registreren</button>
            </div>
        </form>
    );

}