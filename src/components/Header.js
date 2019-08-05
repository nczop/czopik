import React, { Component } from 'react';
import '../css/HeaderStyle.css';
import shopIcon from '../shopIcon.png';

export class Header extends Component {
    render() {
        return (
            <div className = "header">    
                <img src={shopIcon} alt="website logo" />          
            </div>
        )
    }
}

export default Header




