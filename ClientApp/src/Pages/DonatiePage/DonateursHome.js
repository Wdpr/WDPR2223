import React, { useState } from 'react'
import { VoorstellingBigCard } from '../../components/Voorstelling/VoorstellingBigCard';

export const DonateursHome = () => {
    const [voorstellingen, setVoorstellingen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const dummydonaties = [
        {
            bedrag:7800,
            datum: "2021-02-18",
        },
        {
            bedrag:20,
            datum: "2024-12-24",
        },
        {
            bedrag:1235,
            datum: "2021-11-38",
        },
    ];

    var donatieTotaal = 0;

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

    const filteredVoorstellingen = selectedGenre
        ? voorstellingen.filter(voorstelling => voorstelling.genre === selectedGenre)
        : voorstellingen;

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
                </div>
                <div className="donateursKnop">
                    <button><a className="donatieLink" href="/Doneren">Klik hier om te doneren!</a></button>
                </div>    
            </div>

            <div>
                <div className="knoppenContainer">
                    <ul className="keuzeWatWijzigen">
                        <li onClick={handleClick} >Bekijk de volledige programmering</li>
                        <li onClick={handleClick} >Bekijk mijn transacties</li>
                    </ul>
                </div>

                {selectedItem === 'Bekijk de volledige programmering' && (
                    <div className="naamDiv" >
                        <h1>Volledige programmering</h1>
                        <div className='genreFilter'>
                        <select onChange={handleGenreChange}>
                            <option value="" selected>All Genres</option>
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
                            <tr>
                                <th>Naam</th>
                                <th>Bedrag</th>
                                <th>Datum</th>
                            </tr>

                            {dummydonaties.map(donatie => {
                                donatieTotaal += donatie.bedrag;
                                return (
                                    <tr>
                                        <td>{JSON.parse(sessionStorage.getItem("gebruiker")).userName}</td>
                                        <td>{donatie.bedrag}</td>
                                        <td>{donatie.datum}</td>
                                    </tr>
                                
                                )
                                
                            }
                            )}
                        </table>

                        <p>U heeft totaal €{donatieTotaal} gedoneerd</p>

                    </div>
                )}

                


            </div>

        </div>
    )
}