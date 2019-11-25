import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        userName:'',
        userImage:'',
        email:'',
        password:'',
        firstName:'',
        lastName:''
        
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
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <p></p>
                <div className="input-field">
                    <label htmlFor="userName"></label>
                    <input type="userName" id="userName" placeholder="User Name" onChange={this.handleChange}/>                    
                </div>
                <div className="input-field">
                    <label htmlFor="userImage"></label>
                    <input type="userImage" id="userImage" placeholder="User Image Url" onChange={this.handleChange}/>                    
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Email" onChange={this.handleChange}/>                    
                </div>
                <div className="input-field">
                    <label htmlFor="password" ></label>
                    <input type="password" id="password" placeholder="Password" onChange={this.handleChange}/>                    
                </div>
{/*                 <div className="input-field">
                    <label htmlFor="passwordConfimation" ></label>
                    <input type="passwordConfimation" id="passwordConfimation" placeholder="Password Confimation" onChange={this.handleChange}/>                    
                </div> */}
                <div className="input-field">
                    <label htmlFor="firstName" ></label>
                    <input type="firstName" id="firstName" placeholder="First Name" onChange={this.handleChange}/>                    
                </div>
                <div className="input-field">
                    <label htmlFor="lastName" ></label>
                    <input type="lastName" id="lastName" placeholder="Last Name" onChange={this.handleChange}/>                    
                </div>
                <p></p>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-detph-0">Sign Up</button>
                </div>
                </form>
            </div>
        )
    }
}

export default SignUp
