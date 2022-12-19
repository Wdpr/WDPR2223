import { useState } from "react"
export function AddRemoveMultipleInputFields(){

    const [inputFields, setInputFields] = useState([{
        naam:'',
        zaalnummer:'',
        datum:'',
        tijd:'',
        genre: '',
        band:'',
        artiest:'' 

    } ]);
 
    const addInputField = ()=>{

        setInputFields([...inputFields, {
            naam:'',
            zaalnummer:'',
            datum:'',
            tijd:'',
            genre: '',
            band:'',
            artiest:''

        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    
 
 
}
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {naam: naam, zaalnummer: zaalnummer, datum: datum, tijd: tijd, genre: genre, band: band, artiest: artiest}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={naam} name="fullName" className="form-control"  placeholder="Naam acteur" />
                    </div>
                    </div>
                    <div className="col">
                    <input type="email" onChange={(evnt)=>handleChange(index, evnt)} value={zaalnummer} name="emailAddress" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={datum} name="genre" className="form-control" placeholder="Genre" />
                    </div>
                    <div className="col">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={genre} name="genre" className="form-control" placeholder="Genre" />
                    </div>
                    <div className="col">
                

                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">

                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        
    )
}
export default AddRemoveMultipleInputFields




