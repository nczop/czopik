import React, { Component } from 'react';
import '../css/HeaderStyle.css';

export class Header extends Component {
    render() {
        return (
            <div className = "header"> 
                <i className="fa fa-search" aria-hidden="true" id="search"></i>   
                <i className="fa fa-shopping-cart" aria-hidden="true" id="shoppingBasket"></i>         
            </div>
        )
    }
}

export default Header




