import React, { Component } from 'react'
import '../../css/pages_css/BasketItemStyle.css';

export class BasketItem extends Component {

    
    render() {
        return (                          
            <div className= "basketItem">
                <div className= "basketItemRemove"><button class="fa fa-times" aria-hidden="true"></button></div>
                <div className= "basketPhoto"><img className="basketItemPhoto" src={this.props.item.photo}></img></div>
                <div className= "basketItemName">{this.props.item.title}</div>
                <div className= "basketItemPrice">{this.props.item.price} zł</div>
                <div className= "basketItemQuantity">{this.props.item.quantity}</div>
                <div className= "basketItemSum">{this.props.item.price * this.props.item.quantity} zł</div>
                <hr className= "horizontalLineBasket"></hr>                 
            </div>  
        )
    }
}

export default BasketItem
