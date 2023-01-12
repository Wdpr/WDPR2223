import React from "react";
import { LoginForm } from "../../components/Login/LoginForm";
import { Link } from "react-router-dom";

import theaterFoto from '../../assets/theaterfoto.jpg';


export class LoginPage extends React.Component{
    static displayName = LoginPage.name
    
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
                        <LoginForm />
                        <Link to="/CreateAccount" className="formFieldLink">Nog geen account?</Link>
                    </div>
                </div>
                
          </div>
        )
    }
}

