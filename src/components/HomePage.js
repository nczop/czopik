import React, { Component } from 'react';
import '../css/HomePageStyle.css';
import Header from './Header';
import Logo from './Logo';
import NavBar from './Navbar';
import ItemBox from './ItemBox';
import Footer from './Footer';
import Photo from './Photo';



export class HomePage extends Component {
    render() {
        return (
            <div className= 'homePage'>
                <Header />  
                <Logo /> 
                <NavBar /> 
                <Photo />
                <ItemBox />    
                <Footer />                                                                  
            </div>
        )
    }
}



export default HomePage

