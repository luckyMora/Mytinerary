import React,{Component} from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Landing from "./Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInBar from './LogInBar';
import cities from './cities';
import registerPage from './registerPage';
import {connect} from 'react-redux';
import Navbar from './componentNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">  
      <HashRouter>
      <Navbar/>
      <div><Route exact path="/"component={Landing} /></div>
      <div><Route path="/loginYo" component={LogInBar}/></div>
      <div><Route path="/cities" component={cities}/></div>
      <div><Route path="/registerPage" component={registerPage}/></div>
      </HashRouter>
      </div>
    );
  }
}
const mapStateProps = (state) =>{console.log(state);return{}}

export default connect (null, mapStateProps)(App);
