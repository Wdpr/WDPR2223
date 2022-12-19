import React from 'react'

export const VoorstellingLijst = ({voorstelling, setVoorstelling, setEditVoorstelling, setEditVoorstelling}) =>{



const handleEdit = ({id})=>{
const findVoorstelling = voorstelling.find((voorstellingItem)=> voorstellingItem.id === id);
setEditVoorstelling(findVoorstelling);
}

    const handleDelete = () =>{
        setVoorstelling(voorstelling.filter((voorstellingItem) => voorstellingItem.id !== id ));
    };

    return(

    <div>
        {voorstelling.map((voorstellingItem) => (
            <li className='lijst-met-voorstellingen'key={voorstellingItem.id}>
                <input type="text" value={voorstellingItem.title} className='lijstje' onChange={(event)=> event.preventDefault()}></input>
                <div>
                    <button className='button-doeiets-wijzig' onClick={()=>handleEdit(voorstellingItem)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-doeiets-verwijder' onClick={()=> handleDelete(voorstellingItem)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>

        ))}
    </div>
    );
};
