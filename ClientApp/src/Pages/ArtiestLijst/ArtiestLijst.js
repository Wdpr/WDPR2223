import { useState, useEffect } from 'react';
import axios from 'axios';
import './artiestLijst.css'

export function AList() {

  const [artiestData, setArtiestData] = useState([]);
  useEffect(() => { fetchArtiestData() }, []);

  async function fetchArtiestData() {
    try {
      const response = await fetch("api/artiest/alleArtiesten");
      const responseJSON = await response.json();
      console.log(responseJSON);
      setArtiestData(responseJSON);
    } catch {

    }
  }

  const deleteButton = (artiest, e) => {
    // console.log(artiest);
    // axios.delete('api/artiest/' + artiest.id).then(() => {
    //   let newList = artiestData.filter((x) => x.itemName !== artiest.id);

    //   setArtiestData(newList);
    // });
    fetch(api/at)
  }

  return (
    <div className='container'>
<input type='text' placeholder='Search...' className='zoeken'></input>
      {artiestData.map(artiest => {

return(
        <div className='artiestItem'>
          <ul>
            <li>{artiest.naam}</li>
            <li>{artiest.id}</li>
          </ul>
          <div>
            <button className='button-deleteArtiest' onClick={() => deleteButton(artiest)}>delete</button>
          </div>
        </div>

      )})}
    </div>

  )
  /* <div>
   {
      artiestData.map(artiest=>{
        return(
          <div>
           {artiest.naam}
           {artiest.id}
  
          </div>
         
        )
      })
   }
  </div> */




}