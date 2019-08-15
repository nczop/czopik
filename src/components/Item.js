import React, { Component } from 'react'
import '../css/ItemStyle.css';
import pink from '../pink.png';
import black from '../black.png';
import green from '../green.png';

export class Item extends Component {    

    render() {        
        return (
            <div className = 'items'>
                <div className = 'item'>
                    <img src={pink} alt="website logo" />
                    <div className="itemHomePageDescripton">dhfh</div>
                    <div className="itemHomePagePrice">zł</div>
                </div>
                <div className = 'item'>
                    <img src={black} alt="website logo" />
                    <div className="itemHomePageDescripton">ssld</div>
                    <div className="itemHomePagePrice">zł</div>
                </div>
                <div className = 'item'>
                    <img src={green} alt="website logo" />
                    <div className="itemHomePageDescripton">ssld</div>
                    <div className="itemHomePagePrice">zł</div>
                </div>
            </div>
            
        )
    }
}

export default Item
