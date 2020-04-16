import React, { Component } from 'react';
import '../../css/pages_css/Product.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Product extends Component {

    state = {
        product: {}
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/shop/` + this.props.match.params.id)
            .then(res => {
                this.setState({ product: res.data });
        })
    }

    render() {        
        const { product } = this.state;
        return (
            <div className="singleContainer">
                <div className="singleProduct">
                    <div className="photoProduct"><img src={product.photo}></img></div>
                    <div className="titleDescriptionPrice">
                        <div className="titleProduct"> {product.title}</div>
                        <div className="descriptionProduct">{product.description}</div>
                        <div className="price">{product.price}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Product)
