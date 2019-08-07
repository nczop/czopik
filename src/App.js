import React, { Component } from 'react';
import HomePage from './components/HomePage';
import 'font-awesome/css/font-awesome.css';
import Header from '../src/components/Header';
import Logo from '../src/components/Logo';
import NavBar from '../src/components/Navbar';

class App extends Component {
  render () {
    return (
    <div>    
      <Header />  
      <Logo /> 
      <NavBar /> 
      <HomePage />      
    </div>
    )    
  }
}

export default App;
