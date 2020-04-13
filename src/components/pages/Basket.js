import React, { Component } from 'react'
import '../../css/pages_css/BasketStyle.css';
import axios from 'axios';
import BasketItem from './BasketItem';

export class Basket extends Component {   
    
    state = {        
        product: [],
                
    }    
    
    componentDidMount() {       
        this.props.basket.forEach(id => axios.get(`http://localhost:5000/shop/` + id.id)
        .then(res => {
            const bagInfo = res.data;
            bagInfo.quantity = id.quantity;
            console.log(bagInfo)
            this.setState({ product: [...this.state.product, bagInfo]});       
        }))
    }

    
   
    render() {    
        const shouldRenderBasket = this.props.counter !== 0          
        if(shouldRenderBasket) {
            return (   
                <div className= "basketContainer">                                     
                 <div className= "basketProducts">
                    <div className= "headerBasket">Twoje zakupy </div>
                    <div className= "headerTable">
                        <div className= "basketProductRemove"></div>
                        <div className= "basketProductName">Produkt</div>
                        <div className= "basketProductPrice">Cena</div>
                        <div className= "basketProductQuantity">Ilość</div>
                        <div className= "basketProductSum">Suma</div>
                    </div>
                    <hr className= "horizontalLineBasket"></hr>                  
                        {this.state.product.map((item) => (
                            <BasketItem item={item} quantity={this.props.quantity} ></BasketItem>                             
                        ))}
                    <div className="basketSummary">
                        <div>Kupon</div>
                        <div>Suma</div>
                    </div>                                           
                </div>              
            </div>             
            )
        }
        return <div className= "emptyBasket">Twój koszyk jest pusty</div>
    }
}

export default Basket


