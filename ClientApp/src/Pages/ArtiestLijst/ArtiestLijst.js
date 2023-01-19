import { useState, useEffect } from 'react';

export function AList() {
  const [artiestData, setArtiestData] = useState([]);

  useEffect(() => { fetchArtiestData() }, []);

  async function fetchArtiestData() {
    const response = await fetch("api/artiest/alleArtiesten");
    const responseJSON = await response.json();
    setArtiestData(responseJSON);
  }

  return (
    <div>
      <h1>Artiesten</h1>
      {artiestData.map(artiest => <div key={artiest.id}>{artiest.id} - {artiest.naam}</div>)}
    </div>
  )
}