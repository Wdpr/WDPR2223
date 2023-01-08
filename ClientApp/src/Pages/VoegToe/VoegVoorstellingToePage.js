import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import './x.css'

export function VoorstellingAdding() {
    const [voorstellingNaam, setVoorstelllingNaam] = useState("");
    const [zaalnummer, setZaalnummer] = useState("");
    const [datumTijd, setDatumTijd] = useState("");
    const [tijdsduur, setTijdsduur] = useState("");
    const [genre, setGenre] = useState("");
    const [artiest, setArtiest] = useState("");
    const [prijs, setPrijs] = useState("");

    const [error, setError] = useState(false);


    async function submitHandler(e) {
        e.preventDefault();
        if(voorstellingNaam.length==0 || zaalnummer.length==0 || prijs.length==0 || artiest.length==0){
            setError(true)
        }
        fetch("api/voorstelling/niewuweVoorstelling", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Naam: voorstellingNaam,
                Zaal: zaalnummer,
                img: "bruh",
                Prijs: prijs,
                Genre: genre,
            })
        }).then(response => {
            console.log(response)
            response.ok ? alert("voorstelling toegevoegd") : alert("poging mislukt")
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="container">
                <h1>Voeg Een Voorstelling Toe</h1>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row my-3">
                            <div className="col">

                                <label  className="labelInput">voorstelling naam</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingNaam" onChange={(e) => setVoorstelllingNaam(e.target.value)} name="naam" className="form-control" placeholder="naam" />
                                <div className="background-warning">{error&&voorstellingNaam<=0?<label className="warning-no-input">voorstelling naam mag niet leeg zijn</label>: ""}</div>
                                <label  className="labelInput">zaalnummer</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingZaalnummer" onChange={(e) => setZaalnummer(e.target.value)} name="zaalnummer" className="form-control" placeholder="zaalnummer" />
                                <div className="background-warning">{error&&zaalnummer.length<=0? <label className="warning-no-input">zaalnummer mag niet leeg zijn</label>: ""}</div>
                                <label  className="labelInput">datum/tijd voorstelling</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingDatum" onChange={(e) => setDatumTijd(e.target.value)} name="datum" className="form-control" placeholder="dd-mm-jjjj" />
                                <div className="background-warning"><label className="warning-no-input">datum/tijd mag niet leeg zijn</label></div>
                                <label  className="labelInput">tijdsduur</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingTijd" onChange={(e) => setTijdsduur(e.target.value)} name="tijd" className="form-control" placeholder="uu-mm" />
                                <div className="background-warning"><label className="warning-no-input">tijdsduur mag niet leeg zijn</label></div>
                                <label  className="labelInput">genre</label>
                                <label className="optioneel1">	&#40;optioneel&#41;</label>
                                <input type="text" id="voorstellingGenre" onChange={(e) => setGenre(e.target.value)} name="genre" className="form-control" placeholder="genre" />
                                <label  className="labelInput">artiest</label>
                                <label className="verplicht2">*</label>
                                <input type="text" id="voorstellingArtiest" onChange={(e) => setArtiest(e.target.value)} name="artiest" className="form-control" placeholder="artiest" />
                                <div className="background-warning">{error&&artiest.length<=0?<label className="warning-no-input">artiest mag niet leeg zijn</label>: ""}</div>
                                <label className="verplicht2">*</label>
                                <label  className="labelInput">prijs</label>
                                <input type="text" id="voorstellingPrijs" onChange={(e) => setPrijs(e.target.value)} name="prijs" className="form-control" placeholder="0,00$" />
                                <div className="background-warning">{error&&prijs.length<=0?<label className="warning-no-input">prijs mag niet leeg zijn</label>: ""}</div>

                                <div> <NavLink tag={Link} className="text-dark" to="/AddArtiest">
                                    <button className="btn btn-outline-success">&#43; artiest</button>
                                </NavLink></div>
                                <div>
                                    <button className="btn btn-outline-success" type="submit">Save</button>
                                </div>

                            </div>
                            
                        </div>
                        <label>* = verplicht veld</label>
                    </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </form>
    )
}
