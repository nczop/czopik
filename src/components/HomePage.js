import React, { Component } from 'react';
import '../css/HomePageStyle.css';
import ItemBox from './ItemBox';
import Footer from './Footer';
import Photo from './Photo';



export class HomePage extends Component {
    render() {
        return (
            <div className= 'homePage'>                 
                <Photo />
                <ItemBox />    
                <Footer />                                                                  
            </div>
        )
    }
}



export default HomePage

