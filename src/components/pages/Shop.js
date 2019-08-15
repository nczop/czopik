import React, { Component } from 'react'
import '../../css/pages_css/Shop.css';
import pink from '../../../src/pink.png';
import black from '../../../src/black.png';
import green from '../../../src/green.png';
import SingleProductOnList from '../SingleProductOnList';
import uuid from 'uuid';
import AddProduct from './AddProduct';

export class Shop extends Component {

    state = {
        productList: [
            {
                id: uuid.v4(),
                title: "fronendowka",
                price: "100 zł",
                photo: <img src={pink} alt="website logo" />
            },
            {
                id: uuid.v4(),
                title: "fronendowka",
                price: "100 zł",
                photo: <img src={black} alt="website logo" />
            },
            {
                id: uuid.v4(),
                title: "fronendowka",
                price: "100 zł",
                photo: <img src={green} alt="website logo" />
            },
        ],
        addProductHidden: true
    }

    addProduct = (title) => {
        const newproductList = {
            id: uuid.v4(),
            title,
            price: "100 zł",
            photo: "new"
        }
        this.setState({ productList: [...this.state.productList, newproductList] })
    }

    render() {
        return (
            <div className="productContainer">
                <div className="row product-wrapper">
                    {this.state.productList.map((product) => (
                        <SingleProductOnList product={product} />
                    ))}
                </div>
                <div className="plus">
                    <button className="fa fa-plus" aria-hidden="true" id="plusIcon" onClick={() => this.setState({addProductHidden: false})}></button>
                </div>
                <div className="addProductWrapper" hidden={this.state.addProductHidden}>
                    <AddProduct addProduct={this.addProduct} />
                </div>
            </div>
        )
    }
}

export default Shop
