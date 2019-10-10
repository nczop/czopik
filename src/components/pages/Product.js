import React, { Component } from 'react';
import '../../css/pages_css/Product.css';
import { withRouter } from "react-router-dom";

class Product extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className= "singleContainer">
                <div className= "singleProduct">
                    <div className="photoProduct"></div>
                    <div className="titleDescriptionPrice">
                        <div className="titleProduct"> Nazwa plcaka</div>
                        <div className="descriptionProduct">Opis</div>
                        <div className="price">Cena</div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default withRouter(Product)
