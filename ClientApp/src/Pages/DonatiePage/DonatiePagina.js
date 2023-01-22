import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function DonatiePagina () {
    const navigate = useNavigate();
    const [donatieBedrag, setDonatieBedrag] = useState(0);

    const gebruiker = JSON.parse(sessionStorage.getItem("gebruiker"));
    const token = sessionStorage.getItem("token");
    if (gebruiker == null) {
        alert("U moet ingelogd zijn om een donatie te kunnen doen");
        navigate("/login");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const donatie = {
            Bedrag: donatieBedrag,
            Datum: new Date(),
            BezoekerId: gebruiker.id
        };

        fetch("api/donatie/nieuweDonatie", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
            body: JSON.stringify(donatie)
        })
            .then(res => {
                if (res.ok) {
                    alert("Donatie is toegevoegd");
                    navigate("/profiel");
                } else {
                    throw new Error("Donatie niet gelukt");
                }
            })
            .catch(err => {
                console.error(err);
                alert("Donatie niet gelukt. Mogelijk personeel");
            });
    }


    return (
        <>
            <div className="beginBanner">
                <div className="beginBannerText">
                    <h4>Donateurs</h4>
                    <h1>Home</h1>
                </div>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <br />
                        <label>
                            Donatie bedrag:
                            <input type="number" name="donatieBedrag" placeholder="Vul het bedrag in" onChange={(e) => setDonatieBedrag(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <button >Doneer</button>
                    </div>
                </form>
            </div>
        </>
    );
}
