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
 
    // const addInputField = ()=>{

    //     setInputFields([...inputFields, {
    //         naam:'',
    //         zaalnummer:'',
    //         datum:'',
    //         tijd:'',
    //         genre: '',
    //         band:'',
    //         artiest:''

    //     } ])
      
    // }
//     const removeInputFields = (index)=>{
//         const rows = [...inputFields];
//         rows.splice(index, 1);
//         setInputFields(rows);
//    }
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
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={naam} name="naam" className="form-control"  placeholder="naam voorstelling" />
                   
                    <input type="email" onChange={(evnt)=>handleChange(index, evnt)} value={zaalnummer} name="zaalnummer" className="form-control" placeholder="zaalnummer" />
                   
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={datum} name="datum" className="form-control" placeholder="datum dd-mm-jjjj" />
                   
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={genre} name="genre" className="form-control" placeholder="genre" />

                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={band} name="band" className="form-control" placeholder="band" />

                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={artiest} name="artiest" className="form-control" placeholder="artiest" />
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

                    <button className="btn btn-outline-success">Add</button>
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




