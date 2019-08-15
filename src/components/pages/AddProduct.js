import React, { Component } from 'react'
import '../../css/pages_css/AddProduct.css';

export class AddProduct extends Component {

    state = {
        title: '',
    }

    onChange = (e) => this.setState({title: e.target.value})

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state.title);
        this.setState({tilte: ''});
    }

    render() {
        return (
            <div className="addNewProduct">
                <div className="addPhoto">Zdjęcie: </div>
                <input className="addTitle" placeholder="Nazwa plecaka" type="text" value={this.state.tilte} onChange={this.onChange}></input>
                <div className="addPrice">Cena: </div>
                <div className="addDescription">Opis: </div>
                <button onClick={this.onSubmit} className="confirm">Dodaj</button>
            </div>
        )
    }
}

export default AddProduct
