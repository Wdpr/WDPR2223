import React from "react";
import { useNavigate } from "react-router-dom";

export function DoneerPage() {
  const navigate = useNavigate();

  function dummySubmit(e) {
    e.preventDefault()
    const gebruiker = JSON.parse(sessionStorage.getItem("gebruiker"))
    if (gebruiker === null) {
      alert("U moet ingelogd zijn om te kunnen doneren")
      navigate("/login")
    }

    const bedrag = e.target.bedrag.value
    const tekst = e.target.tekst.value
    const gebruikerId = "ads-adsfd-adsf"

    fetch("api/doneer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gebruikerId, bedrag, tekst })
    }).then(response => console.log("donatie gepost: "+ response.ok))
  }

  return (
    <div>
      <h1>Doneer</h1>
      <p>
        Het zou fijn zijn als u ons theater wilt steunen.
        Om te doneer voor ons theater zult u naar de volgden website moeten gaan: <a href="https://ikdoneer.azurewebsites.net/">ikDoneer api van school</a>.
        <br />
        <br />
        Voer de volgende stappen uit om te kunnen doneren:
        </p>
        <ol>
          <li>Maak een account aan</li>
          <li>Stort geld op IkDoneer</li>
          <li>Kies een goed doel uit bij Goede doelen</li>
          <li>Doneer</li>
        </ol>
        <p>
        <br />
        U wordt vriendelijk bedankt voor uw donatie. Voor doneren krijgt u een bedankje van ons theater. Zo krijgt u de mogelijkheid om eerder voorstellingen te boeken
      </p>

      {/*dummy form om submit te testen */}
      <form onSubmit={e => dummySubmit(e)}>
        <label>Bedrag: </label><input type='number' name="bedrag"/>
        <label>Tekst: </label><input type='text' name="tekst"/>
        <button type="submit">Doneer</button>
      </form>

    </div>
  );
}