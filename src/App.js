import React,{Component} from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Landing from "./Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInBar from './LogInBar';
import cities from './cities';
import registerPage from './registerPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
      <div><Route exact path="/"component={Landing} /></div>
      <div><Route path="/loginYo" component={LogInBar}/></div>
      <div><Route path="/cities" component={cities}/></div>
      <div><Route path="/registerPage" component={registerPage}/></div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
