import React, { useState } from "react";

export const RegistreerForm = () => {
    const [voornaam, setVoornaam] = useState("");
    const [achternaam, setAchternaam] = useState("");
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

    async function submitHandler (e)  {
        e.preventDefault();

        console.log("submit")
        if (!emailEnWachtwoordControle(e)) return
        console.log("email en wachtwoord zijn goed")

        let response = await fetch("api/bezoeker/registeer", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                UserName: voornaam + " " + achternaam,	
                Email: email,
                PasswordHash: wachtwoord,
                Intresse : "test"
            })
        })
        console.log(response)
    }

    return (
        <form className="loginFormulier" onSubmit={submitHandler}>
            <div >
                <label className="formFieldLabel">
                    Voornaam
                    <input className="formFieldInput" type="text" name="Voornaam" placeholder="Vul uw voornaam in" onChange={(e) => setVoornaam(e.target.value)} />
                </label>
            </div>
            <div >
                <label className="formFieldLabel">
                    Achternaam
                    <input className="formFieldInput" type="text" name="Achternaam" placeholder="Vul uw achternaam in" onChange={(e) => setAchternaam(e.target.value)} />
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