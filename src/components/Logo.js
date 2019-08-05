import React, { Component } from 'react';
import czopikLogo from '../czopikLogo.png';
import '../css/LogoStyle.css';

export class Logo extends Component {
    render() {
        return (
            <div className= 'logo'>
                <img src={czopikLogo} alt="website logo" />
            </div>
        )
    }
}

export default Logo
