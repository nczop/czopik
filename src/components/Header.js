import React, { Component } from 'react';
import '../css/HeaderStyle.css';
import { Link } from 'react-router-dom';


export class Header extends Component {
    
    
    
    render() {
        return (
            <div className="header">
                <div className="socialmedia">
                    <i className="fa fa-facebook-official" aria-hidden="true" id="facebook"></i>
                    <i className="fa fa-instagram" aria-hidden="true" id="instagram"></i>
                </div>
                <div className="shopingCart">
                    <div className="counter">
                        <i className="fa fa-shopping-cart" aria-hidden="true" id="shoppingCart" ></i>
                        <p className="number">{this.props.counter}</p>
                    </div>
                    <div>
                        <i className="fa fa-search" aria-hidden="true" id="search"></i>
                        <Link to="/login" className = 'navLinkLogin'><i className="fa fa-user" aria-hidden="true" id="user" ></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header




