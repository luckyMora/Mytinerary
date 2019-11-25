import React,{Component} from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Landing from "./Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './SignIn'
import cities from './cities';
import SignUp from './SignUp';
import {connect} from 'react-redux';
import NavbarComp from './componentNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">  
      <HashRouter>
      <NavbarComp/>
      <div><Route exact path="/"component={Landing} /></div>
      <div><Route path="/signin" component={SignIn}/></div>
      <div><Route path="/cities" component={cities}/></div>
      <div><Route path="/signup" component={SignUp}/></div>
      </HashRouter>
      </div>
    );
  }
}
const mapStateProps = (state) =>{console.log(state);return{}}

export default connect (null, mapStateProps)(App);
