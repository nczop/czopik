import React, { Component } from 'react'
import '../../css/pages_css/Shop.css';

export class Shop extends Component {
    render() {
        return (
            <div className= "productContainer">
                <div className= "row">
                    <div className= "product">1</div>
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
