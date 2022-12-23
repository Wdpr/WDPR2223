import { useState } from "react"
export function VoegArtiestToeAanLijst(){

    const [inputFields, setInputFields] = useState([{
        naam:'',
        email:'',
        

    } ]);
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    
 
 
}
    return(
    
        <div className="container">
            <h1>Voeg Een Artiest Toe</h1>
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {naam: naam, email: email}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <label>naam artiest</label>
                    <input type="text" id="artiestNaam" onChange={(evnt)=>handleChange(index, evnt)} value={naam} name="naam" className="form-control"  placeholder="naam artiest" />
                    <label>email artiest</label>
                    <input type="email" id="artiestEmail" onChange={(evnt)=>handleChange(index, evnt)} value={email} name="email" className="form-control" placeholder="email" />
                    </div>
                
                    {/* <button className="btn btn-outline-success">+</button>
                     */}
                    <div className="col">
                

                
                 {/* {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''} */}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">

                    <button className="btn btn-outline-success">&#43;</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        
    )
}
export default VoegArtiestToeAanLijst
