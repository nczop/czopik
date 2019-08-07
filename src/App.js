import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import 'font-awesome/css/font-awesome.css';
import Header from '../src/components/Header';
import Logo from '../src/components/Logo';
import NavBar from '../src/components/Navbar';
import Shop from '../src/components/pages/Shop';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Logo />
          <NavBar/>
          <Route exact path="/" component= {HomePage} />                        
          <Route path="/shop" component={Shop} />      
        </div>
      </Router>
    
    )    
  }
}

export default App;
