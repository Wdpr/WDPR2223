import React, {useState} from 'react';
import {Header} from './VoorstellingToevoegen/Header';
import {Form} from './VoorstellingToevoegen/Form';
import {VoorstellingLijst} from './VoorstellingToevoegen/VoorstellingLijst';


export const PageVoorstellingAdd = () =>{

const [input, setInput] = useState("");
const [voorstelling, setVoorstelling] =   useState([]);
const [editVoorstelling, setEditVoorstelling] = useState(null);

    return(
    <div className="box"> 
<div className="wrapper">

<div>
    <Header />
</div>
<div>
    <Form input={input}
    setInput={setInput}
    todos={voorstelling}
    setTodos={setVoorstelling}
    editTodo={editVoorstelling}
    setEditTodo={setEditVoorstelling} />
</div>
<div>
    <VoorstellingLijst 
    todos={voorstelling}
     setTodos={setVoorstelling} 
     setEditTodo={setEditVoorstelling} />
</div>
</div>
</div>
   
    );
};

