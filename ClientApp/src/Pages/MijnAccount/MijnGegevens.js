import React from "react";
import { useState, useEffect } from "react";
import WerknemerPortaal from "../../components/WerknemerPortalen/WerknemerPortaal";
import AdminPortaal from "../../components/WerknemerPortalen/AdminPortaal";
import VoorkeurenComponent from "../../components/VoorkeurenComponent";
import { useNavigate } from "react-router-dom";


export function ToonMijnGevens() {
    const navigate = useNavigate();

    const [ToonWijzigForm, setToonWijzigForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [reserveringen, setReserveringen] = useState([]);
    const [bezoeker, setBezoeker] = useState([]);
    const [voorkeuren, setVoorkeuren] = useState([]);

    const handleClick = (event) => {
        setSelectedItem(event.target.innerText);
    }

    function DonateursPortaalButton() {
        // go to Donateursportaal
        navigate('/DonateursHome', {state:{bezoeker : bezoeker} })
      }

    useEffect(() => {
        const fetchData = async () => {
            //Ophalen van reserveringen
            const responsReserveringen = await fetch('api/reservering/')
            const dataReserveringen = await responsReserveringen.json();
            //Ophalen van bezoekers zonder voorkeur/donatie
            const responsBezoeker = await fetch('api/bezoeker/')
            const dataBezoeker = await responsBezoeker.json();
            //Juist bezoeker ophalen
            
            const ingelogdeBezoeker = dataBezoeker.find(bezoeker => bezoeker.email === JSON.parse(sessionStorage.getItem("gebruiker")).email);
            
            //setten van juiste bezoeker
            setBezoeker(ingelogdeBezoeker);
            const filteredReserveringen = dataReserveringen.filter(reservering => reservering.bezoekerId === ingelogdeBezoeker.id)
            //setten van juiste reserveringen
            setReserveringen(filteredReserveringen);
            
            //tonen van de voorkeuren
            if(ingelogdeBezoeker && ingelogdeBezoeker.voorkeuren) {
                const stringVanVoorkeuren = ingelogdeBezoeker.voorkeuren;
                const teTonenVoorkeuren = stringVanVoorkeuren.split(",");
                setVoorkeuren(teTonenVoorkeuren);
                }
            
            
        };
        fetchData();
    }, []);


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
                            {voorkeuren.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="gebruikerGegevens">{JSON.parse(sessionStorage.getItem("gebruiker")).voorkeuren}</p>


                        <h5>Het Donatie Platform:</h5>
                            <button onClick={DonateursPortaalButton} className="donatieKnop">DonateursPortaal</button>
                        

                        <button className="wijzigGegevens" onClick={() => setToonWijzigForm(!ToonWijzigForm)}>Wijzig gegevens</button>
                    </div>
                </div>

                <div className="mijnReserveringen">
                    <h1>Mijn reserveringen</h1>
                    
                    <div className='alMijnReserveringen'>
                            {reserveringen.map(reservering => {
                                return (
                                    <div key = {reservering.id}>
                                        <h1 className="titelVoorstelling">{reservering.voorstelling.naam}</h1>
                                        <div className="reserveringCard"> 

                                            <div className="infoVanVoorstelling">
                                                    <ul>
                                                        <li>Zaal {reservering.voorstelling.zaalId}</li>
                                                        <li>{reservering.voorstelling.datum}</li>
                                                        <li>{reservering.voorstelling.tijd}</li>
                                                    </ul>
                                            </div>  

                                            <div className="alleStoelen">
                                                <ul>
                                                    <li><b>Stoelen: {reservering.stoelen.length}</b></li>
                                                    
                                                </ul>        
                                            </div>
                                            <div className="totaalprijs">
                                                <ul>
                                                    <li >Totaal Prijs: € {reservering.totaalPrijs}</li>
                                                    <li>Code: {reservering.id}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                </div>
                                )
                            })}
                    </div>

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
                            <div className="naamDiv" >

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
                                            <input className="formFieldInput" type="email" name="nieuweEmail" placeholder="Vul uw nieuwe E-mail in"   />
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
                                
                                <VoorkeurenComponent emailAdres = {bezoeker.email} />
                            
                            </div>
                        )}


                    </div>
                ) : null}

            </div>

            <div>
            {/* {JSON.parse(sessionStorage.getItem("gebruiker")).username === 'hier je username' ? ( */}
                {JSON.parse(sessionStorage.getItem("gebruiker")).functie === 'Werknemer' || JSON.parse(sessionStorage.getItem("gebruiker")).functie === 'Admin'  ? (
                    <div className="werknemerPortaal">
                        <WerknemerPortaal />
                    </div>
                ) : null}
            </div>

            <div>
                {JSON.parse(sessionStorage.getItem("gebruiker")).functie === 'Admin' ? (
                    <div className="adminPortaal">
                        <AdminPortaal  />
                    </div>
                ) : null}
            </div>
        </div>

    )
}

export default ToonMijnGevens;