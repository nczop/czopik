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
import { LoggedUser } from './components/pages/LoggedUser';
import { createBrowserHistory } from 'history';


class App extends Component {

  state = {
    counter: 0,
    loggedUser: false,
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
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
        loggedUser: true
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
          <Route path="/shop" component={() => <Shop increment={this.increment} />} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/1" component={Product} />
          <Route path="/login" component={() => <LoginForm showUSer={this.showUSer} loggedUser={this.state.loggedUser} />} />
          <Route path="/loggedUser" component={() => <LoggedUser showUSer={this.showUSer} loggedUser={this.state.loggedUser} />} />
        </div>
        <div className="footerApp" >
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;
