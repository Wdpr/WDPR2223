import React from "react";
import { useState, useEffect } from 'react';

const StoelKiezen = ({ voorstelling }) => {
  // Stoelen. waarde 0 = leeg. ||| Waarde 1 = geselecteerd. 
  //                           ||| Waarde 2 = gereserveerd. 
  const [eersteRang, setEersteRang] = useState()
  const [tweedeRang, setTweedeRang] = useState()
  const [derdeRang, setDerdeRang] = useState()

  const [zaalLaden, setZaalLaden] = useState(false)

  async function haalZaalOp(zaal) {
    var respons = await fetch('api/zaal/' + zaal)
    var data = await respons.json();
    setEersteRang(data.aantalEersteRang)
    console.log(data.aantalEersteRang)
    setTweedeRang(data.aantalTweedeRang)
    setDerdeRang(data.aantalDerdeRang)
    // setZaalLaden(false)
  }

  useEffect(() => {
    haalZaalOp(1)
  }, [])

  useEffect(() => {
    maakStoelen()  
}, [zaalLaden]) 


  function berekenAantalRijenPerCategorie(aantalStoelen, rangnr) {
    function maakLijst(aantalStoelenPerRij) {
      let array = []
      for (let i = 0; i < aantalStoelen / aantalStoelenPerRij; i++) {
        let row = [];
        for (let j = 0; j < aantalStoelenPerRij; j++) {
          row.push(rangnr);
        }
        array.push(row);
      }
      return array
    }


    if (aantalStoelen === 0) {
      return 0
    }
    if (aantalStoelen < 20) {
      return maakLijst(5)
    }
    if (aantalStoelen < 80) {
      return maakLijst(10)
    }
    return maakLijst(20)

  }


  function maakStoelen() {
    const totaalAantalStoelen = eersteRang + tweedeRang + derdeRang
    const aantalRijenEersteCategorie = berekenAantalRijenPerCategorie(eersteRang, 1)
    const aantalRijenTweedeCategorie = berekenAantalRijenPerCategorie(tweedeRang, 2)
    const aantalRijenDerdeCategorie = berekenAantalRijenPerCategorie(derdeRang, 3)

    console.log(aantalRijenEersteCategorie)
    console.log(aantalRijenTweedeCategorie)
    console.log(aantalRijenDerdeCategorie)

  
    const stoelen = [...aantalRijenEersteCategorie, ...aantalRijenTweedeCategorie, ...aantalRijenDerdeCategorie]
    setSeats(stoelen)
  }

  const [seats, setSeats] = useState([
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ]);

  const [categories, setCategories] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  ]);

  //prijzen per categorie
  const prices = [10.00, 20.25, 30.50];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (rij, stoel) => {
    // Kopie van de stoelen array
    const newSeats = [...seats];
    // Check of stoel bezet is.
    if (newSeats[rij][stoel] === 2) {
      return;
    }
    // Omzetten van vrije stoel naar selected
    newSeats[rij][stoel] = 1 - newSeats[rij][stoel];
    // Updaten van de state met de nieuwe seats array
    setSeats(newSeats);
    const newSelectedSeats = [...selectedSeats];
    // Toevoegen aan selected
    if (newSeats[rij][stoel] === 1) {
      newSelectedSeats.push({ rij, stoel });
    } else {
      // Verwijderen van selected
      newSelectedSeats.splice(
        newSelectedSeats.findIndex(seat => seat.rij === rij && seat.stoel === stoel),
        1
      );
    }
    // Updaten van de state met nieuwe selectedSeats 
    setSelectedSeats(newSelectedSeats);
  };

  //Berekenen van totale prijs van geselecteerde stoelen
  const totalPrice = selectedSeats.reduce((total, seat) => {
    return total + prices[categories[seat.rij][seat.stoel] - 1];
  }, 0);


  return (
    <div className="stoelContainer">

      <div className="stoelKeuze">
        <div className="scherm">
          <h4>Toneel</h4>
          <br />
        </div>
        {seats.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((seat, colIndex) => (
              <button
                key={colIndex}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
                className={`seat-button ${seat === 1 ? 'selected' : ''} 
                                            ${seat === 2 ? 'reserved' : ''}
                                            `}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="stoelInfo">
        <div >
          Geselecteerde stoelen:
          {selectedSeats.length === 0
            ? ' Geen.'
            : selectedSeats.map((seat, index) => (
              <div key={index}>
                Rij {seat.rij + 1}, Stoel {seat.stoel + 1}, Categorie {categories[seat.rij][seat.stoel]}              </div>
            ))}
        </div>
        <div className="totaalPrijs">
          Totaalprijs: €{totalPrice}
        </div>
      </div>

    </div>
  );
};

export default StoelKiezen;