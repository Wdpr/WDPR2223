import {useState, useEffect} from 'react';


export function AList(){

const[artiestData, setArtiestData] = useState([]);
useEffect(()=>{fetchArtiestData()}, []);

async function fetchArtiestData(){
    try{
        const response = await fetch("api/artiest/alleArtiesten");
        const responseJSON = await response.json();
        console.log(responseJSON);
        setArtiestData(responseJSON);
}catch{

}
}



return (
<div>
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
</div>



)























}