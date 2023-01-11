import React from "react";
import { useState } from "react";



export default function VoorkeurenComponent() {
    const alleVoorkeuren = ['Komedie', 'Musical', 'Cabaret', 'Dans', 'Zang', 'Kindertheater', 'Drama'];


    const [voorkeuren, setVoorkeuren] = useState([]);
    const [active, setActive] = useState(Array(alleVoorkeuren.length).fill(false));

    const handleSubmit = (index) => {
        const updatedActive = [...active];
        updatedActive[index] = !updatedActive[index];
        setActive(updatedActive);
        const invoer = alleVoorkeuren[index];
        if(voorkeuren.includes(invoer)){
            setVoorkeuren(voorkeuren.filter(item => item !== invoer));
        }else{
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
                    <button className={active[index] ? "black-btn" : "white-btn"} onClick={() => handleSubmit(index)}>{item}</button>
                    ))}

            <br />
            <br />
            <br />
            <h2>De geselecteerde voorkeuren:</h2>

            {voorkeuren.map((item) => (
                <li key={item}>{item}</li>
            ))}
            
            
        </div>
    )

}