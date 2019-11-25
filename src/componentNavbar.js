import React, {Component} from 'react'
import {NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
class NavbarComp extends Component {
  
render(){
      const{history}=this.props
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mytinerary</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink to='/'>Home</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to='/signIn'>Sign In</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to='/signUp'>Sign Up</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to='/cities'>Cities</NavLink></NavDropdown.Item>
          </NavDropdown>
        </Nav>
          <Button variant="outline-success" onClick={()=>history.goBack()}>Back</Button>
      </Navbar.Collapse>
    </Navbar>
    )
}}
export default withRouter(NavbarComp);