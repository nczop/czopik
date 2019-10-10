import React, { Component } from 'react';
import '../css/SingleProductOnList.css';
import { Link } from 'react-router-dom';

export class SingleProductOnList extends Component {   

    render() {
        return (
            <div className="singleItem">
                <Link to={"/shop/"+this.props.product.id} className="divLink">
                    <div className="photoItem"><img src={this.props.product.photo}></img></div>
                    <div className="titleItem">{this.props.product.title}</div>
                </Link>
                <div className="priceItem">{this.props.product.price}
                    <button className="fa fa-plus" aria-hidden="true" id="addToShopIcon" onClick={this.props.increment} ></button>
                </div>                
            </div>
        )
    }
}

export default SingleProductOnList
