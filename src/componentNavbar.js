import React, {Component} from 'react'
import {NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Navbar extends Component {
  
render(){
      const{history}=this.props
    return (
        <div>
            <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white"><NavLink to='/'>Mytinerary</NavLink></h4>
      <span class="text-muted"><NavLink to='/cities'>Cities</NavLink></span>
      <span class="text-muted"><NavLink to='/'>Itineraries</NavLink></span>
      <span class="text-muted"><NavLink to='/loginYo'>Log In</NavLink></span>
      <span class="text-muted"><NavLink to='/registerPage'>Register</NavLink></span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button fa-pull-right onClick={()=>history.goBack()}>Back</button>
  </nav>
</div>
        </div>
    )
}}
export default withRouter(Navbar);