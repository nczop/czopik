import React, { Component } from 'react';
import '../css/NavbarStyle.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div className= "navbar">
                <hr className= 'horizontalLine'></hr>                
                <Link to="/" className = 'navLink'> Home </Link>
                <Link to="/shop" className = 'navLink'> Sklep </Link>
                <Link to="/aboutMe" className = 'navLink'> O mnie </Link>
                <Link to="/contact" className = 'navLink'> Kontakt </Link> 
                <hr className= 'horizontalLine'></hr>                
            </div>
        )
    }
}

export default Navbar
