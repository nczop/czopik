import React, { Component } from 'react';
import '../css/FooterStyle.css';

export class Footer extends Component {
    render() {
        return (
            <div className= 'footer'>
                <div className = "col">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <p>Regulamin</p>
                    <p>Polityka prywatności</p>
                </div>
                <div className = "col">
                    <i className="fa fa-truck" aria-hidden="true"></i>
                    <p>Koszt i termin dostawy </p>
                    <p>Wymiany i zwroty</p>
                </div>
                <div className = "col">
                    <i className="fa fa-commenting" aria-hidden="true"></i>
                    <p>O mnie</p>
                    <p>Kontakt</p>
                </div>
            </div>
        )
    }
}

export default Footer
