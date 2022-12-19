import React, {useState} from 'react';  

export function VoorstellingAdding(){


const [list, setList] = useState([]);
const[input, setInput] = useState("");

const addVoorstelling = (voorstelling) =>{
const newVoorstelling = {
    id: Math.random(),
    voorstelling: voorstelling
}

setList([...list, newVoorstelling]);

setInput("");
}

const deletVoorstelling = (id) =>{
const newList = list.filter((voorstelling) => voorstelling.id !== id);

setList(newList);
}



return(
<div>
    <h1>Voeg een voorstelling toe
    </h1>
    <input type='text' 
    value={input}
     placeholder='voer voorstelling naam in'
     onChange={(x)=>setInput(x.target.value)}
     ></input>
     <button onClick={()=>addVoorstelling(input)}>Add</button> 
     <ul>
        {list.map((voorstelling)=>(
        <li key={voorstelling.id}>
            {voorstelling.voorstelling}
            <button onClick={() => deletVoorstelling(voorstelling.id)}>&times;</button>
        </li>    
        ))}
     </ul>
</div>
)
}