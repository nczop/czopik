import React, { Component } from 'react'
import '../../css/pages_css/LoginFormStyle.css';

export class LoginForm extends Component {

    state= {
        login: '',
        password: '',
    }

    onChange = (e) => {
        this.setState ({ [e.target.name]: e.target.value  
        });
    }

    render() {
        console.log(this.state.login)
        return (
            <div className="mainLoginDiv">
                <div className="loginForm">
                    <div className="loginAndPassword">
                        <h2>Zaloguj się </h2>
                        <p>
                            <input className="inputLoginAndPassword" name="login" type="text" placeholder="Login" value={this.state.login} onChange={this.onChange}></input>
                        </p>
                        <p>
                            <input className="inputLoginAndPassword" name="password" type="text" placeholder="Hasło" value={this.state.password}></input>
                        </p>
                        <button >Zaloguj</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
