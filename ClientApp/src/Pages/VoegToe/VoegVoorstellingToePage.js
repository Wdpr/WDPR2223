import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
export function VoorstellingAdding() {

    const [inputFields, setInputFields] = useState([{
        naam: '',
        zaalnummer: '',
        datum: '',
        tijd: '',
        genre: '',
        band: '',
        artiest: '',
        prijs: '',


    }]);

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
    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);



    }
    return (

        <div className="container">
            <h1>Voeg Een Voorstelling Toe</h1>
            <div className="row">
                <div className="col-sm-8">
                    {
                        inputFields.map((data, index) => {
                            const { naam: naam, zaalnummer: zaalnummer, datum: datum, tijd: tijd, genre: genre, band: band, artiest: artiest, prijs: prijs } = data;
                            return (
                                <div className="row my-3" key={index}>
                                    <div className="col">
                                        <form>
                                            <label>voorstelling naam</label>
                                            <input type="text" id="voorstellingNaam" onChange={(evnt) => handleChange(index, evnt)} value={naam} name="naam" className="form-control" placeholder="naam" />
                                            <label>zaalnummer</label>
                                            <input type="text" id="voorstellingZaalnummer" onChange={(evnt) => handleChange(index, evnt)} value={zaalnummer} name="zaalnummer" className="form-control" placeholder="zaalnummer" />
                                            <label>datum voorstelling</label>
                                            <input type="text" id="voorstellingDatum" onChange={(evnt) => handleChange(index, evnt)} value={datum} name="datum" className="form-control" placeholder="dd-mm-jjjj" />
                                            <label>tijd</label>
                                            <input type="text" id="voorstellingTijd" onChange={(evnt) => handleChange(index, evnt)} value={tijd} name="tijd" className="form-control" placeholder="uu-mm" />
                                            <label>genre</label>
                                            <input type="text" id="voorstellingGenre" onChange={(evnt) => handleChange(index, evnt)} value={genre} name="genre" className="form-control" placeholder="genre" />
                                            <label>band</label>
                                            <input type="text" id="voorstellingBand" onChange={(evnt) => handleChange(index, evnt)} value={band} name="band" className="form-control" placeholder="band" />
                                            <label>artiest</label>
                                            <input type="text" id="voorstellingArtiest" onChange={(evnt) => handleChange(index, evnt)} value={artiest} name="artiest" className="form-control" placeholder="artiest" />
                                            <label>prijs</label>
                                            <input type="text" id="voorstellingPrijs" onChange={(evnt) => handleChange(index, evnt)} value={prijs} name="prijs" className="form-control" placeholder="0,00$" />
                                        </form>
                                        <NavLink tag={Link} className="text-dark" to="/AddArtiest">
                                            <button className="btn btn-outline-success">&#43; artiest</button>
                                        </NavLink>
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

                            <button className="btn btn-outline-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>

    )
}
export default VoorstellingAdding