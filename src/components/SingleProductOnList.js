import React, { Component } from 'react';
import '../css/SingleProductOnList.css';
import { Link } from 'react-router-dom';
import { isUserLoggedIn } from '../AuthService';

export class SingleProductOnList extends Component {   

    
    deleteItem = ()=> {
        this.props.removeProduct(this.props.product.id)
    }
    plusIcon = () => {
        this.props.addBagToBasket(this.props.product.id, this.props.product.title)              
    }    

    
    render() {
        return (
            <div className="singleItem">
                <Link to={"/shop/"+this.props.product.id} className="divLink">
                    <div className="photoItem"><img src={this.props.product.photo}></img></div >
                    <div className="titleItem">{this.props.product.title}</div>
                </Link>
                <div className="priceItem">{this.props.product.price}
                    <button className="fa fa-plus" aria-hidden="true" id="addToShopIcon" onClick={this.plusIcon} ></button>                    
                    {isUserLoggedIn() &&
                    <div className="trash">
                        <button className="fa fa-trash" aria-hidden="true" id="trashIcon" onClick={this.deleteItem}></button>
                    </div>
                }
                </div>                
            </div>
        )
    }
}

export default SingleProductOnList
