import React, { Component } from 'react'
import '../css/ItemBoxStyle.css';
import Item from './Item'

export class ItemBox extends Component {
    render() {
        return (
            <div className = 'itembox'>
                <div className = 'new'>Nowe uszytki</div>
                <Item />
            </div>
        )
    }
}

export default ItemBox
