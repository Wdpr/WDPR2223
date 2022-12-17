import React from "react";
import { Link } from "react-router-dom";

import theaterFoto from '../../assets/theaterfoto.jpg';


export class LoginPage extends React.Component{
    static displayName = LoginPage.name

    toonLoginForm = () => {
        return (
            <form className="loginFormulier">
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
                    <button className='formFieldButton' type="submit">Login</button>
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
                    <div className='loginForm'>
                        <h1>Theater Laak</h1>
                        <h2>Log in</h2>
                        {this.toonLoginForm()}
                        <Link to="/CreateAccount" className="formFieldLink">Nog geen account?</Link>
                    </div>
                </div>
                
          </div>
        )
    }
}

