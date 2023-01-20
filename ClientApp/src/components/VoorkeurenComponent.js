import React, { useEffect } from "react";
import { useState } from "react";




export default function VoorkeurenComponent(props) {

    const alleVoorkeuren = ['Komedie', 'Musical', 'Cabaret', 'Dans', 'Zang', 'Kindertheater', 'Drama'];

    const [email, setEmail] = useState("");
    const [voorkeuren, setVoorkeuren] = useState([]);
    const [stringVanVoorkeuren, setStringVanVoorkeuren] = useState("");

    const [active, setActive] = useState(Array(alleVoorkeuren.length).fill(false));


    useEffect(() => {
        setEmail(props.emailAdres);
        const stringVoorkeuren = voorkeuren.toString();
        setStringVanVoorkeuren(stringVoorkeuren);
        }
    );
    
    const OpslaanVanVoorkeuren = () => {
        
        fetch('https://localhost:44468/api/bezoeker/voegVoorkeurenToe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: email ,
                Voorkeuren: stringVanVoorkeuren ,
                
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log(data);
            })
            .catch(error => console.log(error))
    }



    const handleSubmit = (index) => {
        const updatedActive = [...active];
        updatedActive[index] = !updatedActive[index];
        setActive(updatedActive);
        const invoer = alleVoorkeuren[index];
        if (voorkeuren.includes(invoer)) {
            setVoorkeuren(voorkeuren.filter(item => item !== invoer));
        } else {
            setVoorkeuren([...voorkeuren, invoer]);
        }
        console.log(voorkeuren);
    }


    return (
        <div className="voorkeurenDiv">
            <br />
            <h1>Voorkeuren</h1>
            <br />
            {alleVoorkeuren.map((item, index) => (
                <button key={index} className={active[index] ? "black-btn" : "white-btn"} onClick={() => handleSubmit(index)}>{item}</button>
            ))}

            <br />
            <br />
            <br />
            <h2>De geselecteerde voorkeuren:</h2>

            {voorkeuren.map((item) => (
                <li key={item}>{item}</li>
            ))}

            <div>
                <br />
                <button onClick={OpslaanVanVoorkeuren} className="white-btn">Opslaan</button>
            </div>
        </div>
    )

}