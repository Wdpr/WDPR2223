import { useState, useEffect } from 'react';


export function AList() {

  const [artiestData, setArtiestData] = useState([]);
  useEffect(() => { fetchArtiestData() }, []);

  async function fetchArtiestData() {
    const toke = localStorage.getItem("token");
    const response = await fetch("api/artiest", {
      method: "GET",
      headers: { "Authorization": "Bearer " + token},
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    setArtiestData(responseJSON);
  }

  return (
    <div>
      {
        artiestData.map(artiest => <div>{artiest.id} - {artiest.naam}</div>)
      }
    </div>)

}