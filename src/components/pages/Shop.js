import React, { Component } from 'react'
import '../../css/pages_css/Shop.css';
import pink from '../../../src/pink.png';
import black from '../../../src/black.png';
import green from '../../../src/green.png';
import SingleProductOnList from '../SingleProductOnList';
import uuid from 'uuid';
import AddProduct from './AddProduct';
import { isUserLoggedIn } from '../../AuthService';
import axios from 'axios';

export class Shop extends Component {

    state = {
        productList: [],
        addProductHidden: true,
    }

    componentDidMount() {
    axios.get(`http://localhost:5000/chomik`)
      .then(res => {       
        this.setState({ productList: res.data });
      })
    }    
    

    addProduct = (title) => {
        const newproduct = {
            id: uuid.v4(),
            title,
            price: "100 zł",
            photo: "new"
        }
        axios.post('http://localhost:5000/newbag', newproduct)
        .then(res => {
            this.setState({ productList: [...this.state.productList, newproduct] })                  
        })        
    }
// axios.post('http://localhost:5000/newbag', newproduct)
        // .then(res => {
        //     this.setState({ productList: [...this.state.productList, newproduct] })
        // })   axios.post('http://localhost:5000/newbag', newproduct)
        // .then(res => {
        //     this.setState({ productList: [...this.state.productList, newproduct] })
        // })   
    render() {
        return (
            <div className="productContainer">
                <div className="row product-wrapper">
                    {this.state.productList.map((product) => (
                        <SingleProductOnList increment={this.props.increment} product={product} />
                    ))}
                </div>
                {isUserLoggedIn() &&
                    <div className="plus">
                        <button className="fa fa-plus" aria-hidden="true" id="plusIcon" onClick={() => this.setState({ addProductHidden: false })}></button>
                    </div>
                }
                <div className="addProductWrapper" hidden={this.state.addProductHidden}>
                    <AddProduct addProduct={this.addProduct} />
                </div>
            </div>
        )
    }
}

export default Shop
