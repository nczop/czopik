import React, { Component } from 'react'
import '../../css/pages_css/Shop.css';
import { Link } from 'react-router-dom';
import pink from '../../../src/pink.png';

export class Shop extends Component {
    render() {
        return (            
                <div className= "productContainer">
                    <div className= "row">
                        <div className= "product">
                            <Link to="/1" className= "divLink">
                                <div className= "productPhoto" >
                                    <img src={pink} alt="website logo" />                                
                                </div>
                                <p className= "description">OPIS</p>
                                <p className = "price">CENA</p>
                            </Link>                            
                        </div>
                        <div className= "product">2</div>
                        <div className= "product">3</div>
                    </div>
                    <div className= "row">
                        <div className= "product">4</div>
                        <div className= "product">5</div>
                        <div className= "product">6</div>
                    </div>
                </div>
            
            
            
        )
    }
}

export default Shop
