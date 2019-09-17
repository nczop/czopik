import React, { Component } from 'react'
import { isUserLoggedIn } from '../../AuthService';
import { withRouter } from "react-router-dom";



 class LoggedUser extends Component {

    removeItem = () => {
        localStorage.removeItem("login")
        const logout = isUserLoggedIn()
        this.props.showUSer(logout)
        this.props.history.push("/")
    }


    render() {
        return (
            <div>
                <button onClick={this.removeItem}> wyloguj </button>
            </div>
        )
    }
}

export default withRouter(LoggedUser)
