import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/NavMenu.css';
import laaktheaterLogo from '../assets/logo.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.LogUit = this.LogUit.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  LogUit() {
    sessionStorage.removeItem('gebruiker');
    window.location.href = "/";
  }

  render() {
    
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/"><img className='navBarLogo' src={laaktheaterLogo} /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/voorstelling">Voorstellingen</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/overons">Over Ons</NavLink>
              </NavItem>
              {sessionStorage.getItem('gebruiker') ?
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/profiel">Profiel</NavLink>
                  </NavItem>
                  <button onClick={() => this.LogUit()}>Log uit</button>
                </>
                :
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Login">Login/Registreren</NavLink>
                </NavItem>
              }
              
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
