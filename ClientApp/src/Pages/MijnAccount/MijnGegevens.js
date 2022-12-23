import React from "react";
import { useState } from "react";

export function ToonMijnGevens(){
    const dummyGebruiker = {id : 2521, 
                            naam : "Sjaak Verkaak", 
                            email : "blaEmail@Email.nl", 
                            wachtwoord: "wachtwoord123",
                            voorkeuren : ["Musical", "Comedy", "Drama"]
                        }

    const dummyVoorstelling = {id : 1,
                                titel : "The Lion King",
                                beschrijving : "The Lion King is een musical gebaseerd op de gelijknamige animatiefilm uit 1994. De musical ging op 13 juni 1997 in première in het New Amsterdam Theatre in New York en werd in 2006 verplaatst naar het Minskoff Theatre. De musical is geschreven door Roger Allers en Irene Mecchi, die ook de film schreven, en is geregisseerd door Julie Taymor. De muziek is van Elton John en de teksten zijn van Tim Rice. De musical is in 2019 voor de 20e keer genomineerd voor een Tony Award.",
                                duur : 120,
                                genre : "Musical",
                                }

    const dummyDonatieBedrag = 500;
    const dummyWerknemer = 0;
    const dummyAdmin = 1;

    return(
        <div>
            <div className="containervoorMijnGegevensEnMijnReserveringen">
                <div className="mijnGegevens">
                    <h1>Mijn gegevens</h1>

                    <h5>Naam:</h5>
                    <p>{dummyGebruiker.naam}</p>

                    <h5>Email:</h5>
                    <p>{dummyGebruiker.email}</p>

                    <h5>Voorkeuren</h5>
                    <ul>
                        {dummyGebruiker.voorkeuren.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h5>Totaal gedoneerd:</h5>
                    <p>{dummyDonatieBedrag}</p>
                    {dummyDonatieBedrag >= 1000 ? (
                        <button className="donatieKnop">DonateursPortaal</button>) : null}

                    <button className="wijzigGegevens">Wijzig gegevens</button>
                </div>

                <div className="mijnReserveringen">
                    <h1>Mijn reserveringen</h1>
                    
                </div>
            </div>

            <div>
            {dummyWerknemer === 1 ? (
                <div className="werknemerPortaal">
                <h1>Werknemer portaal</h1>
                </div>
            ) : null}
            </div>

            <div>
            {dummyAdmin === 1 ? (
                <div className="AdminPortaal">
                <h1>Admin portaal</h1>
                </div>
            ) : null}
            </div>
        </div>
            
    )
}

export default ToonMijnGevens;