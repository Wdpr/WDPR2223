import React, { useState } from 'react'
import { VoorstellingBigCard } from '../../components/Voorstelling/VoorstellingBigCard';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

export const DonateursHome = () => {
    const state = useLocation().state;


    const [voorstellingen, setVoorstellingen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [donaties, setDonaties] = useState([]);
    const [totaalGedoneerd, setDonatieTotaal] = useState(0);

    useEffect(() => {
        const fetchDonaties = async () => {
            const response = await fetch("api/donatie");
            const data = await response.json();
            const totaleBedrag = 0;
            setDonaties(data.filter(donatie => donatie.bezoekerId === state.bezoeker.id));
            setDonatieTotaal(data.filter(donatie => donatie.bezoekerId === state.bezoeker.id).reduce((a, b) => a + b.bedrag, 0));
        };
        fetchDonaties();
    }, [state.bezoeker.id]);

    

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    }

    const handleClick = (event) => {
        setSelectedItem(event.target.innerText);
    }

    React.useEffect(() => {
        async function fetchData() {
            let response = await fetch('api/Voorstelling');
            let data = await response.json();
            setVoorstellingen(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    var donatieTotaal = 0;

    const filteredVoorstellingen = selectedGenre
        ? voorstellingen.filter(voorstelling => voorstelling.genre === selectedGenre)
        : voorstellingen;

        filteredVoorstellingen.sort((b, a) => new Date(a.datumDateTime) - new Date(b.datumDateTime));

    return (
        <div>
            <div className="beginBanner">
                <div className="beginBannerText">
                    <h4>Donateurs</h4>
                    <h1>Home</h1>
                </div>
            </div>
            <div className="welkomBerichtDonateur">
                    <h1>Welkom bij het Donateurs Portaal!</h1>
            </div>
            <div className="donateursPortaal">
                <div className="donateursPortaalText">
                    <p>Donaties zijn onmisbaar.<br></br>
                        Samen zorgen we ervoor dat we allemaal gebruik kunnen maken van het theater. Door middel van donaties kunnen we nieuwe producties op poten zetten voor schappelijke prijzen.
                        Theater Laak is een plek waar mensen samenkomen om te genieten van kunst en vermaak, dit kunnen we middels donaties mogelijk maken.
                        </p>
                        <br></br>
                    <p>
                    Een donatie, hoe groot of klein ook,<br></br>maakt een groot verschil. Wij zijn dankbaar voor elke donatie die we ontvangen en beloven om onze donoren te blijven betrekken bij ons werk.
                        Als donateur bent u namelijk de eerste die op de hoogte bent van onze programmering en de eerste die kaarten kan bestellen. Daarnaast wordt U ook uitgenodigd voor speciale events.
                        Laten we samen zorgen voor een bloeiende theaterwereld.
                    </p>
                    <p>Indien u totaal €1000 heeft gedoneerd, krijgt u toegang tot de speciale programmering! </p>
                </div>
                <div className="donateursKnop">
                    <button><a className="donatieLink" href="/Doneren">Klik hier om te doneren!</a></button>
                </div>    
            </div>

            <div>
                <div className="knoppenContainer">
                    <ul className="keuzeWatWijzigen">
                    {totaalGedoneerd >= 1000 && (
                        <li onClick={handleClick} >Bekijk de volledige programmering</li>
                    )}
                        <li onClick={handleClick} >Bekijk mijn transacties</li>
                    </ul>
                </div>


            
                {selectedItem === 'Bekijk de volledige programmering' && (
                    <div className="naamDiv" >
                        <h1>Volledige programmering</h1>
                        <div className='genreFilter'>
                        <select defaultValue="" onChange={handleGenreChange}>
                            <option value="" defaultValue>All Genres</option>
                            {Array.from(new Set(voorstellingen.map(voorstelling => voorstelling.genre))).map(genre => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
            
                    <div className='VoorstellingPageContainer'>
                            <div className='bigCardsContainer'>
                                {loading ? "loading..." : filteredVoorstellingen.map(voorstelling => {
                                    return (
                                        <VoorstellingBigCard key={voorstelling.id} info={voorstelling} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>  
                    )}


                {selectedItem === 'Bekijk mijn transacties' && (
                    <div className="naamDiv" >
                        <h1>Mijn transacties</h1>

                        <table className='donatieTabel'>
                            <tbody>
                            <tr>
                                <th>Naam</th>
                                <th>Bedrag</th>
                                <th>Datum</th>
                            </tr>

                            
                            {donaties.map((donatie, index) => {
                                donatieTotaal += donatie.bedrag;
                                const correcteDatum = donatie.datum.split("T")[0];
                                return (
                                    <tr key={donatie.id}>
                                        <td>{JSON.parse(sessionStorage.getItem("gebruiker")).userName}</td>
                                        <td>€ {donatie.bedrag}</td>
                                        <td>{correcteDatum}</td>
                                    </tr>
                                )
                            }
                            )}
                            </tbody>
                        </table>
                        <br></br>
                        <p><b>U heeft totaal € {donatieTotaal} gedoneerd!</b></p>

                    </div>
                )}

                


            </div>

        </div>
    )
}