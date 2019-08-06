import React, { Component } from 'react'
import '../css/PhotoStyle.css';
import zestaw from '../zestaw.png';

export class Photo extends Component {
    render() {
        return (
            <div className = 'photo'>
                <img src={zestaw} alt="website logo" />
            </div>
        )
    }
}

export default Photo
