import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import LoginForm from './components/pages/LoginForm';
import { isUserLoggedIn } from './AuthService';
import LoggedUser from './components/pages/LoggedUser';
import { createBrowserHistory } from 'history';
import Basket from '../src/components/pages/Basket';

const initQuantity = 1;


class App extends Component {
  constructor(props) {
    super(props);
    const getBasketList = JSON.parse(localStorage.getItem('basketList'))    
    const initBasketList = getBasketList ? getBasketList : []

    this.state = {
      counter: localStorage.getItem('counter') ? localStorage.getItem('counter') : 0,
      loggedUser: false,      
      idBasketCounter: initBasketList,
      elementID: ""
    }    
  }


  addBagToBasket = (id) => {     

    const newIdCounterBasket = {
      id: id,
      quantity: initQuantity
    }

    const { idBasketCounter } = this.state;
    let szukanyElement = idBasketCounter.find(element => element.id === id)
    let cos 
    if (szukanyElement) {
      cos = idBasketCounter
      szukanyElement.quantity++
      this.setState({ idBasketCounter: cos })      
    } else {
      cos = [...this.state.idBasketCounter, newIdCounterBasket]
      this.setState({
        idBasketCounter: cos
      })
    }
    const counterPlus = this.state.counter+1    
    
    this.setState({      
      counter: counterPlus,
    })

    localStorage.setItem('basketList', JSON.stringify(cos));
    localStorage.setItem('counter', counterPlus)
  }


  showUSer = (isUSer) => {
    this.setState({
      loggedUser: isUSer
    })
  }

  componentDidMount() {
    const isLoggedIn = isUserLoggedIn()    
    if (isLoggedIn) {
      this.setState({
        loggedUser: true,
      })
    }
    else {
      this.setState({
        loggedUser: false
      })
    }    
  }

  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
        <div className="mainApp">
          <Header counter={this.state.counter} loggedUser={this.state.loggedUser} />
          <Logo />
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={() => <Shop addBagToBasket={this.addBagToBasket} />} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop/:id" component={Product} />
          <Route path="/login" component={() => <LoginForm showUSer={this.showUSer} loggedUser={this.state.loggedUser} />} />
          <Route path="/loggedUser" component={() => <LoggedUser showUSer={this.showUSer} loggedUser={this.state.loggedUser} />} />
          <Route path="/basket" component={() => <Basket basket={this.state.idBasketCounter} quantity={this.state.quantity} counter={this.state.counter} />} />
        </div>
        <div className="footerApp" >
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;
