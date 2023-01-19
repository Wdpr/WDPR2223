
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function VoorstellingDetails() {
    const state = useLocation().state;
    const navigate = useNavigate();
    

    function handleClick() {
        navigate('/stoelkiezen', { state: state })
    }

    return (
        <div className='VoorstellingInfoPagina'>
            
            <div className='VoorstellingInfoDeel'>
                    <img src='https://images.unsplash.com/photo-1607998803461-4e9aef3be418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
                    className='VoorstellingFoto'
                    alt= 'Foto van een theater' ></img>

                <div className='VoorstellingInfoContainer'>
                    
                    <div className='titels'>
                        <h1>{state.naam}</h1>
                        <h2>{state.artiest.naam}</h2>

                        <p>
                            De prentenboeken van Harmen van Straaten zijn immens populair! 
                            Geen wonder, want de boeken Hé, wie zit er op de wc? en Retteketet! 
                            We gaan nog niet naar bed! zijn humoristisch en aandoenlijk tegelijk, 
                            en elk kind weet zich te herkennen in de doldwaze verhalen. 

                            Een jongetje neemt je mee in zijn wereld en laat je zien welke capriolen zijn knuffels allemaal 
                            uithalen. En dit alles met één doel: ze willen nog lang niet naar bed! 
                            
                        </p>
                    </div>

                    <div className='AlleInfo'>
                        <div className='VoorstellingInfo'>
                            <ul className='VoorstellingenLists'>
                                <li><b>Informatie:</b></li>
                                <li>{state.speelduur} minuten</li>
                                <li>{state.datum}</li>    
                                <li>{state.tijd}</li>
                            </ul>
                        </div>

                        <div className='VoorstellingInfoPrijzen'>
                            <ul>
                                <li><b>Alle Prijzen:</b></li>
                                <li>Derde rang - € {state.prijs} </li>
                                <li>Tweede rang - € {state.prijs * 1.4} </li>
                                <li>Eerste rang - € {state.prijs * 1.8} </li>
                            </ul>
                        </div>
                    </div>

                                <button  className='buttonNaarStoelen' onClick={() => handleClick()} >Bestel hier uw kaarten</button>
                    <h6><Link to='/voorstelling' >Wilt u terug naar de volledige programmering?</Link></h6>
                </div>
                
            </div>
        </div>
    );
}