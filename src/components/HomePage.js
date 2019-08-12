import React, { Component } from 'react';
import '../css/HomePageStyle.css';
import ItemBox from './ItemBox';
import Photo from './Photo';



export class HomePage extends Component {
    render() {
        return (
            <div className= 'homePage'>                 
                <Photo />
                <ItemBox />                                                                                  
            </div>
        )
    }
}

export default HomePage

