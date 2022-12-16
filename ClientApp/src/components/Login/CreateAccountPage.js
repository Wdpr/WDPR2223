import React from "react";
import { Link } from "react-router-dom";

import theaterFoto from '../../assets/theaterfoto.jpg';


export class CreateAccountPage extends React.Component{
    static displayName = CreateAccountPage.name

    toonLoginForm = () => {
        return (
            <form className="loginFormulier">
                <div >
                    <label className="formFieldLabel">
                        Voornaam
                        <input className="formFieldInput" type="text" name="Voornaam" placeholder="Vul uw voornaam in"/>
                    </label>
                </div>
                <div >
                    <label className="formFieldLabel">
                        Achternaam
                        <input className="formFieldInput" type="text" name="Achternaam" placeholder="Vul uw achternaam in"/>
                    </label>
                </div>
                <div >
                    <label className="formFieldLabel">
                        Email adres
                        <input className="formFieldInput" type="text" name="EmailAdress" placeholder="Vul uw E-mail in"/>
                    </label>
                </div>
                <div>
                    <label className="formFieldLabel">
                        Wachtwoord
                        <input className="formFieldInput" type="Wachtwoord" name="Password" placeholder="Vul uw wachtwoord in"/>
                    </label>
                </div>
                <div>
                    <button className='formFieldButton' type="submit">Registreren</button>
                </div>
        </form>
        );
    }
    
    render(props) {
        return(
            <div>
                <div className="totaleLoginForm">
                    <div >
                        <img src={theaterFoto} className='theaterFotoLogin' alt="Theater" />
                    </div>
                    <div className='CreateForm'>
                        <h1>Theater Laak</h1>
                        <h2>Registreren</h2>
                        {this.toonLoginForm()}
                        <Link to="/Login" className="formFieldLink">Heeft u al een account?</Link>
                    </div>
                </div>
                
          </div>
        )
    }
}

