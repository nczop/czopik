import React, { Component } from 'react';
import '../css/SingleProductOnList.css';
import { Link } from 'react-router-dom';

export class SingleProductOnList extends Component {


    render() {
        return (
            <div className="singleItem">
                <Link to="/1" className="divLink">
                    <div className="photoItem">{this.props.product.photo}</div>
                    <div className="titleItem">{this.props.product.title}</div>
                    <div className="priceItem">{this.props.product.price}</div>
                </Link>
            </div>
        )
    }
}

export default SingleProductOnList
