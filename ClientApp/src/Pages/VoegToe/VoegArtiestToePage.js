import { useState } from "react"
import './x.css'

export function VoegArtiestToeAanLijst() {
    const [artiestNaam, setArtiestNaam] = useState("");
    const [error, setError] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();
        if (artiestNaam.length == 0) {
            setError(true)
        }
        else {
            fetch("api/artiest/NieuweArtiest", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + sessionStorage.getItem("token") },
                body: JSON.stringify({
                    Naam: artiestNaam,
                    Img: "image",
                })
            }).then(response => {
                console.log(response)
                response.ok ? alert("artiest toegevoegd") : alert("poging mislukt")
            })
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="container">
                <h1>Voeg Een Artiest Toe</h1>

                <div className="col-sm-8">
                    <div className="row my-3">
                        <div className="col-Artiest">
                            <label className="label1">naam artiest: </label>
                            <label className="verplicht">*</label>
                            <input type="text" id="artiestNaam" onChange={(e) => setArtiestNaam(e.target.value)} name="artiest" className="form-control" placeholder="naam artiest" />
                            <div className="background-warning-artiest">{error && artiestNaam.length <= 0 ? <label className="warning-no-input">naam van de artiest mag niet leeg zijn</label> : ""}</div>
                            <button className="btn-Artiest-Aanmaken" type="submit">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </form>
    )
}
export default VoegArtiestToeAanLijst
