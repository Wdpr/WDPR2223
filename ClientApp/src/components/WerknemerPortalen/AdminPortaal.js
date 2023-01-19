import React from "react";



const AdminPortaal = () => {

    const [gebruikersnaam, setGebruikersnaam] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [wachtwoord, setWachtwoord] = React.useState('');
    const [functie, setFunctie] = React.useState('Werknemer');
    

    function submitHandler(e) {
        e.preventDefault();
        console.log("email en wachtwoord zijn goed")

        fetch("api/bezoeker/registreer/medewerker", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Email: email,
                Gebruikersnaam: gebruikersnaam,
                Wachtwoord: wachtwoord,
                Functie: functie,
            })
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <div>
            <h1>Voeg nieuwe werknemer toe</h1>
            <div>
                <form className="loginFormulier" onSubmit={submitHandler}>
                    <div >
                        <label className="formFieldLabel">
                            userName
                            <br></br>
                            <input className="formFieldInput" type="text" name="Voornaam" placeholder="Vul de naam in" onChange={(e) => setGebruikersnaam(e.target.value)} />
                        </label>
                    </div>
                    <div >
                        <label className="formFieldLabel">
                            Email adres
                            <br></br>
                            <input className="formFieldInput" type="text" name="EmailAdress" placeholder="Vul het emailadres in" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="formFieldLabel">
                            Wachtwoord
                            <br></br>
                            <input className="formFieldInput" type="Wachtwoord" name="Password" placeholder="Vul het wachtwoord in" onChange={(e) => setWachtwoord(e.target.value)} />
                        </label>
                    </div>
                    <span>
                        <label className="checkboxText">
                             <p>Maak Admin:</p>
                            <input type="checkbox" name="checkbox" className="checkboxAdmin" onChange={(e) => setFunctie('Admin')}/>
                        </label>
                    </span>
                    <div>
                        <button className='formFieldButton' type="submit">Registreren</button>
                    </div>
                </form>
                
            </div>

        </div>
    )
}

export default AdminPortaal;