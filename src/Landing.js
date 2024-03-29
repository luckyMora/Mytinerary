import React from 'react'
import Logo from './MYtineraryLogo.png'
//import HomeButton from './homeIcon.png'
import CirclePic from './circled-right-2.png'
import {NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cities from './cities'

export function Landing() {
    return (
        <div className="App" background>
            <div><img src={Logo} style={{width: '300px', height:'auto'}} alt="Logo"/></div>
            {/* <Carousel></Carousel> */}
            {/* <div><NavLink to="/cities"><img src={HomeButton} style={{width: '75px', height:'auto'}}alt="HomeButton"/></NavLink></div> */}
            <div><NavLink to="/cities"><img src={CirclePic} style={{width: '100px', height:'auto'}} alt="CirclePic"/></NavLink></div>
            <div><NavLink to="/signin">Sign In</NavLink></div>
            <div><NavLink to="/SignUp">Sign Up</NavLink></div>
        </div>
    )
}

export default Landing;



