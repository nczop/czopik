import React, { Component } from 'react'
import '../../css/pages_css/LoginFormStyle.css';
import { auth } from '../../AuthService';
import LoggedUser from './LoggedUser';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {

    state = {
        login: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateForm = () => {
        return this.state.login.length > 0 && this.state.password.length > 0;
    }

    authUser = () => {
        const loginResult = auth(this.state.login, this.state.password)
        this.props.showUSer(loginResult)
        this.props.history.push("/loggedUser")
    }

    render() {
        console.log(this.props)
        return (
            <div className="mainLoginDiv">                
                    <div className="loginForm">
                        <div className="loginAndPassword">
                            <h2>Zaloguj się </h2>
                            <p>
                                <input className="inputLoginAndPassword" name="login" type="text" placeholder="Login" value={this.state.login} onChange={this.onChange}></input>
                            </p>
                            <p>
                                <input className="inputLoginAndPassword" name="password" type="password" placeholder="Hasło" value={this.state.password} onChange={this.onChange}></input>
                            </p>
                            <button type="submit" disabled={!this.validateForm} onClick={this.authUser} >Zaloguj</button>
                        </div>
                    </div>
                
            </div>
        )
    }
}


export default withRouter(LoginForm)
