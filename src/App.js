import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import 'font-awesome/css/font-awesome.css';
import Header from '../src/components/Header';
import Logo from '../src/components/Logo';
import NavBar from '../src/components/Navbar';
import Shop from '../src/components/pages/Shop';
import AboutMe from '../src/components/pages/AboutMe';
import Contact from '../src/components/pages/Contact';
import Product from '../src/components/pages/Product';
import Footer from './components/Footer';


class App extends Component {
  
  state = {
    item: [
        {
            id: 1,
            title: 'title1',
            description: 'description1',
            price: 'price1',                
        }
        
    ]
}
  render () {
    return (
      <Router>
        <div className= "mainApp">
          <Header />
          <Logo />
          <NavBar />          
          <Route exact path="/" component= {HomePage} />                        
          <Route path="/shop" component={Shop} />
          <Route path="/aboutMe" component={AboutMe} />  
          <Route path="/contact" component={Contact} />  
          <Route path="/1" component={Product} />            
        </div>
        <div className= "footerApp" >
          <Footer />
        </div>
        
      </Router>
    
    )    
  }
}


export default App;
