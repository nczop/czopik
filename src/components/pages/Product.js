import React, { Component } from 'react';
import '../../css/pages_css/Product.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Product extends Component {

   state = {
       product: null
   }
    componentDidMount() {
        axios.get(`http://localhost:5000/shop/`+ this.props.match.params.id)
          .then(res => {       
            this.setState({ product: res.data });
        })
    }  
    
    render() {
        console.log(this.state.product)
        if (this.state.product) {
            return (
                <div className= "singleContainer">
                    <div className= "singleProduct">
                        <div className="photoProduct"><img src={this.state.product.photo}></img></div>
                        <div className="titleDescriptionPrice">
                            <div className="titleProduct"> {this.state.product.title}</div>
                            <div className="descriptionProduct">Opis</div>
                            <div className="price">{this.state.product.price}</div>
                        </div>                    
                    </div>
                </div>
            )
        } 
        return <h1>nie dziala</h1>
        
    }
}

export default withRouter(Product)
