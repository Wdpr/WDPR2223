import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import './x.css'

export function VoorstellingAdding() {
    const [voorstellingNaam, setVoorstelllingNaam] = useState("");
    const [zaalnummer, setZaalnummer] = useState(0);
    const [datumTijd, setDatumTijd] = useState("");
    const [tijdsduur, setTijdsduur] = useState("");
    const [genre, setGenre] = useState("");
    const [artiest, setArtiest] = useState("");
    const [prijs, setPrijs] = useState(0);

    const [error, setError] = useState(false);

    const [invalidErrorZaal, setInvalidErrorZaal] = useState(false);

    const [invalidErrorPrijs, setInvalidErrorPrijs] = useState(false);




    async function submitHandler(e) {
        e.preventDefault();

        if (voorstellingNaam.length == 0 || zaalnummer == 0 || prijs == 0 || artiest.length == 0 || datumTijd.length == 0 || tijdsduur.length == 0) {
            setError(true)   
        }
        else if(isNaN(zaalnummer) || isNaN(prijs)){ 
            setInvalidErrorZaal(true);
            setInvalidErrorPrijs(true);
        }
        else{
            fetch("api/voorstelling/niewuweVoorstelling", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Naam: voorstellingNaam,
                Zaal: zaalnummer,
                img: "image",
                Prijs: prijs,
                Genre: genre,
                Tijd:  tijdsduur,
                datum: datumTijd,
                Artiest: artiest,
            })
        }).then(response => {
            console.log(response)
            response.ok ? alert("voorstelling toegevoegd") : alert("poging mislukt")
            
            })
           }
          

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="container">
                <h1>Voeg Een Voorstelling Toe</h1>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row my-3">
                            <div className="col-Voorstelling">

                                <label className="labelInput">voorstelling naam</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingNaam" onChange={(e) => setVoorstelllingNaam(e.target.value)} name="naam" className="form-control" placeholder="naam" />
                                <div className="background-warning">{error && voorstellingNaam <= 0 ? <label className="warning-no-input">voorstelling naam mag niet leeg zijn</label> : ""}</div>
                                <label className="labelInput">zaalnummer</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingZaalnummer" onChange={(e) => setZaalnummer(e.target.value)} name="zaalnummer" className="form-control" placeholder="zaalnummer" />
                                <div className="background-warning">{error && zaalnummer == 0? <label className="warning-no-input">zaalnummer mag niet leeg zijn</label> : ""}{invalidErrorZaal &&  (isNaN(zaalnummer)) ?<label className="label-invalidValue">ongeldige waarde</label>: ""}</div>
                                <label className="labelInput">datum/tijd voorstelling</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingDatum" onChange={(e) => setDatumTijd(e.target.value)} name="datum" className="form-control" placeholder="jjjj-mm-dd" />
                                <div className="background-warning">{error && datumTijd.length <= 0 ? <label className="warning-no-input">datum/tijd mag niet leeg zijn</label> : ""}</div>
                                <label className="labelInput">tijdsduur</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingTijd" onChange={(e) => setTijdsduur(e.target.value)} name="tijd" className="form-control" placeholder="uu:mm:ss" />
                                <div className="background-warning">{error && tijdsduur.length <= 0 ? <label className="warning-no-input">tijdsduur mag niet leeg zijn</label> : ""}</div>
                                <label className="labelInput">genre</label>
                                <label className="optioneel1">	&#40;optioneel&#41;</label>
                                <input type="text" id="voorstellingGenre" onChange={(e) => setGenre(e.target.value)} name="genre" className="form-control" placeholder="genre" />                              
                                <label className="labelInput">artiest</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingArtiest" onChange={(e) => setArtiest(e.target.value)} name="artiest" className="form-control" placeholder="artiest" />
                                <NavLink tag={Link} className="text-dark" to="/ArtiestList"><button className="button-artiestlijst">lijst artiesten</button></NavLink>                             
                                <div className="background-warning">{error && artiest.length <= 0 ? <label className="warning-no-input">artiest mag niet leeg zijn</label> : ""}</div>
                                <label className="verplicht2">*</label>
                                <label className="labelInput">prijs</label>
                                <input type="text" id="voorstellingPrijs" onChange={(e) => setPrijs(e.target.value)} name="prijs" className="form-control" placeholder="00.00$" />
                                <div className="background-warning">{error && prijs == 0 ?<label className="warning-no-input">prijs mag niet leeg zijn</label> : ""}{invalidErrorPrijs && (isNaN(prijs))?<label className="label-invalidValue">ongeldige waarde</label>: ""}</div>

                                <div className="button-artiest-div"><label className="voeg-artiest-toe-indicator">Nieuwe artiest: </label> <NavLink tag={Link} className="text-dark" to="/AddArtiest">
                                    <button className="btn-Artiest-Add">&#43; artiest</button>
                                    </NavLink></div>
                                    <div className="button-save-div"><button className="btn-Save" type="submit">Save</button></div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </form>
    )
}
