import React from "react";
import { Link } from "react-router-dom";

import theaterFoto from '../../assets/theaterfoto.jpg';
import { RegistreerForm } from "../../components/Login/RegistreerForm";


export class CreateAccountPage extends React.Component{
    static displayName = CreateAccountPage.name

    
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
                        <RegistreerForm />
                        <Link to="/Login" className="formFieldLink">Heeft u al een account?</Link>
                    </div>
                </div>
                
          </div>
        )
    }
}

