import React, { Component } from 'react'
import {NavLink } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {this.setState({
        [e.target.id]: e.target.value})}
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)}
    render() {
        return (
            <div className="contaier">
                <form onSubmit={this.handleSubmit} action="" className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Email" onChange={this.handleChange}/>                    
                </div>
                <div className="input-field">
                    <label htmlFor="password" ></label>
                    <input type="password" id="password" placeholder="Password" onChange={this.handleChange}/>                    
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-detph-0">Login</button>
                </div>
                </form>
                <div><NavLink to="/SignUp">No Account Yet?</NavLink></div>
            </div>
        )
    }
}

export default SignIn
