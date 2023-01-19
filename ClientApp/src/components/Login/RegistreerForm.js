import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegistreerForm = () => {
    const navigate = useNavigate();
    const [gebruikersnaam, setGebruikersnaam] = useState("");
    const [email, setEmail] = useState("");
    const [wachtwoord, setWachtwoord] = useState("");

    const emailEnWachtwoordControle = (e) => {
        var tekens = /[^0-9a-zA-Z]+$/;
        var kleineletters = /[a-z]+/;
        var hoofdletters = /[A-Z]+/;
        var cijfers = /[0-9]+/;

        if (email.includes("@") && email.includes(".") && email.length >= 6 && email.length <= 35) {
            if (wachtwoord.length >= 6 &&
                wachtwoord.length <= 24 && 
                wachtwoord.match(tekens) && 
                wachtwoord.match(kleineletters) && 
                wachtwoord.match(hoofdletters) && 
                wachtwoord.match(cijfers) ) {
                return true
            }
            alert("U moet voldoen aan de eisen voor de invoervelden");
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
                functie: 'functie'
            })
        }).then(response => {
            console.log(response)
            if (response.ok) {
                alert("registreren gelukt")
                navigate('/login')
            } else alert("registreren mislukt")
        })
    }

    return (
        <form className="loginFormulier" onSubmit={submitHandler}>
            <div >
                <label className="formFieldLabel">
                    Gebruikersnaam
                    <input className="formFieldInput" type="text" name="Gebruikersnaam" placeholder="Vul uw gebruikersnaam in" onChange={(e) => setGebruikersnaam(e.target.value)} />
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
                    <input className="formFieldInput" type="password" name="Password" placeholder="Vul uw wachtwoord in" onChange={(e) => setWachtwoord(e.target.value)} />
                </label>
            </div>
            <div className='wachtwoordEisen'>
                <ul >
                    <li>Wachtwoord moet 6 tot 24 karakters lang zijn</li>
                    <li>Wachtwoord moet minimaal 1 hoofdletter bevatten</li>
                    <li>Wachtwoord moet minimaal 1 cijfer bevatten</li>
                    <li>Wachtwoord moet minimaal 1 speciaal teken bevatten</li>
                </ul>
            </div>
            <div>
                <button className='formFieldButton' type="submit">Registreren</button>
            </div>
        </form>
    );

}