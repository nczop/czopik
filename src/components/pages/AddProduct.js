import React, { Component } from 'react'
import '../../css/pages_css/AddProduct.css';

export class AddProduct extends Component {

    state = {
        title: '',
    }

    onChange = (e) => {
        this.setState({title: e.target.value})        
    } 

    onButtonClick = (e) => {        
        this.props.addProduct(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div className="addNewProduct">
                <div className="addPhoto">Zdjęcie: </div>
                <input className="addTitle" placeholder="Nazwa plecaka" type="text" value={this.state.title} onChange={this.onChange}></input>
                <div className="addPrice">Cena: </div>
                <div className="addDescription">Opis: </div>
                <button onClick={this.onButtonClick} className="confirm">Dodaj</button>
            </div>
        )
    }
}

export default AddProduct
