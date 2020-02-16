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
                        <div className= "basketProductName">Produkt</div>
                        <div className= "basketQuantity">Ilość</div>
                        <div className= "basketPrice">Cena</div>
                    </div>
                    <hr className= "horizontalLineBasket"></hr>                  
                        {this.state.product.map((item) => (
                            <BasketItem item={item} quantity={this.props.quantity} ></BasketItem>                             
                        ))}
                    <div className="basketSum">
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


