import React, { useEffect } from 'react'
import { v4 as uuidV4 } from "uuid";


export const Form = ({ input, setInput, voorstelling, setVoorstelling, editVoorstelling, setEditTodo: setEditVoorstelling }) => {

    const updateVoorstelling = (title, id, completed) => {
        const newVoorstelling = voorstelling.map((voorstellingItem) => {
            voorstelling.id === id ? { title, id, completed } : voorstellingItem
        })
        setVoorstelling(newVoorstelling);
        setEditVoorstelling("");
    };
    useEffect(() => {
        if (editVoorstelling) {
            setInput(editVoorstelling.title);
        } else {
            setInput("");
        }
    })
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editVoorstelling) {
            setVoorstelling([...voorstelling, { id: uuidV4(), title: input, completed: false }]);
            setInput("");
        }
        else {
            updateVoorstelling(input, editVoorstelling.id, editVoorstelling.completed)
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder="naam voorstelling" className='input-naam-voorstelling'
                value={input}
                required onChange={onInputChange}></input>
            <button className='button-add' type='submit'>Add</button>
        </form>

    );
};

