import { useState } from "react";

export function LoginForm() {
    const [naam, setNaam] = useState()
    const [email, setEmail] = useState()
    const [wachtwoord, setWachtwoord] = useState()

    function emailEnWachtwoordCheck() {
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
    function submitHandler(e) {
        e.preventDefault()
        if (!emailEnWachtwoordCheck()) return

        fetch("api/bezoeker/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Email: email,
                Wachtwoord: wachtwoord
            })
        }).then(response => response.ok ? response.json() : alert("inloggen mislukt"))
            .then(data => {
                console.log(data)
                if (data) {
                    alert("ingelogd als " + data.gebruiker.userName)
                    sessionStorage.setItem('token', data.token)
                    sessionStorage.setItem('gebruiker', JSON.stringify({ username: data.gebruiker.userName, id: data.gebruiker.id }))
                    window.location.href = "/"          // ook mogelijk met useNavigate()
                } else {
                    alert("inloggen mislukt")
                }
            })
    }

    return (
        <form className="loginFormulier" onSubmit={(e) => submitHandler(e)}>
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
            <div>
                <button className='formFieldButton' type="submit">Login</button>
            </div>
        </form>
    );
}