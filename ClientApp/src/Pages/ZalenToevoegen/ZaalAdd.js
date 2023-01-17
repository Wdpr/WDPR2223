import { useState } from 'react';
import '../../Styles/StoelenStyle.css';

export function VoegZaalToe() {
  const [eersterng, setEersterng] = useState(0);
  const [tweederng, setTweederng] = useState(0);
  const [derderng, setDerderng] = useState(0);

  async function submitHandler(e) {
    e.preventDefault();
    fetch("api/zaal/nieuweZaal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        AantalEersteRang: eersterng,
        AantalTweedeRang: tweederng,
        AantalDerdeRang: derderng,
      })
    }).then(response => {
      console.log(response)
      response.ok ? alert("Zaal succesvol toegevoegd") : alert("fout")
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='container'>
        <div className='input-eersterang-div'>
          <input type="text" id="eersterang" onChange={(e) => setEersterng(e.target.value)} className="input-firstclass" placeholder="aantal eersterangs"></input>
        </div>
        <div className='input-tweederang-div'>
          <input type="text" id="tweederang" onChange={(e) => setTweederng(e.target.value)} className="input-secondclass" placeholder="aantal tweederangs"></input>
        </div>
        <div className='input-derderang-div'>
          <input type="text" id="derderang" onChange={(e) => setDerderng(e.target.value)} className="input-firstclass" placeholder="aantal eersterangs"></input>
          <div className='button-div-zaal'>
            <button className='submit-zaal-button' type='submit'>Add</button>
          </div>
        </div>
      </div>
      <div className='zaal-concept'>
      </div>
    </form>
  )
}