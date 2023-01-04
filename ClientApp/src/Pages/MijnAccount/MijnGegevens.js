import React from "react";
import { useState } from "react";
import WerknemerPortaal from "../../components/WerknemerPortalen/WerknemerPortaal";
import AdminPortaal from "../../components/WerknemerPortalen/AdminPortaal";


export function ToonMijnGevens() {
    const dummyGebruiker = {
        id: 2521,
        naam: "Sjaak Verkaak",
        email: "blaEmail@Email.nl",
        wachtwoord: "wachtwoord123",
        voorkeuren: ["Musical", "Comedy", "Drama", "Kindertheater", "Cabaret"]
    }

    const dummyVoorstelling = {
        id: 1,
        titel: "The Lion King",
        beschrijving: "The Lion King is een musical gebaseerd op de gelijknamige animatiefilm uit 1994. De musical ging op 13 juni 1997 in première in het New Amsterdam Theatre in New York en werd in 2006 verplaatst naar het Minskoff Theatre. De musical is geschreven door Roger Allers en Irene Mecchi, die ook de film schreven, en is geregisseerd door Julie Taymor. De muziek is van Elton John en de teksten zijn van Tim Rice. De musical is in 2019 voor de 20e keer genomineerd voor een Tony Award.",
        duur: 120,
        genre: "Musical",
    }

    const dummyDonatieBedrag = 5000;
    const dummyAdmin = 1;

    const [ToonWijzigForm, setToonWijzigForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const handleClick = (event) => {
        setSelectedItem(event.target.innerText);
    }


    return (
        <div>
            <div className="containervoorMijnGegevensEnMijnReserveringen">
                <div>
                    <div className="mijnGegevens">
                        <h1>Mijn gegevens</h1>

                        <h5>Naam:</h5>
                        <p className="gebruikerGegevens">{JSON.parse(sessionStorage.getItem("gebruiker")).userName}</p>

                        <h5>Email:</h5>
                        <p className="gebruikerGegevens">{JSON.parse(sessionStorage.getItem("gebruiker")).email}</p>

                        <h5>Voorkeuren</h5>
                        <ul className="gebruikerGegevens">
                            {dummyGebruiker.voorkeuren.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h5>Totaal gedoneerd:</h5>
                        <p className="gebruikerGegevens">€{dummyDonatieBedrag}</p>
                        {dummyDonatieBedrag >= 1000 ? (
                            <button className="donatieKnop">DonateursPortaal</button>) : null}

                        <button className="wijzigGegevens" onClick={() => setToonWijzigForm(!ToonWijzigForm)}>Wijzig gegevens</button>
                    </div>
                </div>

                <div className="mijnReserveringen">
                    <h1>Mijn reserveringen</h1>

                </div>
            </div>

            <div className="wijzigGegevensContainer">
                {ToonWijzigForm ? (
                    <div className="wijzigGegevensPortaal">
                        <h1>Wat wilt u wijzigen</h1>

                        <div className="knoppenContainer">
                            <ul className="keuzeWatWijzigen">
                                <li onClick={handleClick}>Naam</li>
                                <li onClick={handleClick}>Email adres</li>
                                <li onClick={handleClick}>Wachtwoord</li>
                                <li onClick={handleClick}>Voorkeuren</li>
                            </ul>
                        </div>

                        {selectedItem === 'Naam' && (
                            <div className="naamDiv">

                                <form className="loginFormulier" >
                                    <div >
                                        <label className="formFieldLabel">
                                            Voornaam
                                            <input className="formFieldInput" type="text" name="voorNaam" placeholder="Vul uw voornaam in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="formFieldLabel">
                                            Achternaam
                                            <input className="formFieldInput" type="Wachtwoord" name="achterNaam" placeholder="Vul uw achternaam in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <button className='formFieldButton' type="submit">Wijzig</button>
                                    </div>
                                </form>

                            </div>
                        )}

                        {selectedItem === 'Email adres' && (
                            <div className="emailDiv">

                                <form className="loginFormulier" >
                                    <div >
                                        <label className="formFieldLabel">
                                            Huidig Email adres
                                            <input className="formFieldInput" type="email" name="huidigeEmail" placeholder="Vul uw huidige E-mail in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="formFieldLabel">
                                            Nieuw Email adres
                                            <input className="formFieldInput" type="email" name="nieuweEmail" placeholder="Vul uw nieuwe E-mail in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <button className='formFieldButton' type="submit">Wijzig</button>
                                    </div>
                                </form>

                            </div>
                        )}

                        {selectedItem === 'Wachtwoord' && (
                            <div className="wachtwoordDiv">

                                <form className="loginFormulier" >
                                    <div >
                                        <label className="formFieldLabel">
                                            Huidig wachtwoord
                                            <input className="formFieldInput" type="password" name="huidigWachtwoord" placeholder="Vul uw wachtwoord in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="formFieldLabel">
                                            Nieuw Wachtwoord
                                            <input className="formFieldInput" type="password" name="nieuwWachtwoord" placeholder="Vul uw nieuw wachtwoord in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="formFieldLabel">
                                            Bevestiging Wachtwoord
                                            <input className="formFieldInput" type="password" name="bevestigingWachtwoord" placeholder="Vul opnieuw uw nieuw wachtwoord in"  />
                                        </label>
                                    </div>
                                    <div>
                                        <button className='formFieldButton' type="submit">Wijzig</button>
                                    </div>
                                </form>

                            </div>
                        )}

                        {selectedItem === 'Voorkeuren' && (
                            <div className="voorkeurenDiv">

                                <h1>Voorkeuren</h1>
                            </div>
                        )}


                    </div>
                ) : null}

            </div>

            <div>
                {JSON.parse(sessionStorage.getItem("gebruiker")).functie === 'Werknemer' ? (
                    <div className="werknemerPortaal">
                        <WerknemerPortaal />
                    </div>
                ) : null}
            </div>

            <div>
                {JSON.parse(sessionStorage.getItem("gebruiker")).functie === 'Werknemer' ? (
                    <div className="AdminPortaal">
                        <AdminPortaal />
                    </div>
                ) : null}
            </div>
        </div>

    )
}

export default ToonMijnGevens;