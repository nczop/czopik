import React, { Component } from 'react';
import '../css/HeaderStyle.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="socialmedia">
                    <i className="fa fa-facebook-official" aria-hidden="true" id="facebook"></i>
                    <i className="fa fa-instagram" aria-hidden="true" id="instagram"></i>
                </div>
                <div className="shopingCart">
                    <i className="fa fa-shopping-cart" aria-hidden="true" id="shoppingCart"></i>
                    <i className="fa fa-search" aria-hidden="true" id="search"></i>                   
                </div>
            </div>
        )
    }
}

export default Header




