import React, { Component } from 'react';
import Aux from '../hoc/Aux';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import Login from '../Login/Login';
import Logout from '../Login/Logout';
// import Logout from '../Logout';
import Register from '../Login/Register';
// import classes from './Navbar.css';
    


 export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  render(props) {
    return (
      <Aux >
     <Navbar className="navbar-main" color="light" light toggleable>
          <NavbarBrand className="navbarbrand link" src="" href="/">Neighborhood Watch</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navbarbrand link" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbarbrand link" href="/new">Create a Post</NavLink>
              </NavItem>
              
              <Register handleChange={this.props.handleChange} handleRegistration={this.props.handleRegistration} />
              <Login username={this.props.username} password={this.props.password} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
              <Logout handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>


            </Nav>
          </Collapse>
        </Navbar>
      </Aux>

    );
  }
}  

