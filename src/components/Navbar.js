import React, { Component } from 'react';
import '../css/NavbarStyle.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div className= "navbar">
                <hr className= 'horizontalLine'></hr>                
                <button className = 'navButton'>Home</button>
                <Link to="/shop" className = 'navButton'>Sklep</Link>
                <button className = 'navButton'>O mnie</button>
                <button className = 'navButton'>Kontakt</button> 
                <hr className= 'horizontalLine'></hr>                
            </div>
        )
    }
}

export default Navbar
