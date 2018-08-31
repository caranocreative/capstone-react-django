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
  DropdownItem
} from 'reactstrap';

import Login from '../Login/Login';
import Logout from '../Login/Logout';
// import Logout from '../Logout';
import Register from '../Login/Register';
// import classes from './Navbar.css';



export default class Navigation extends React.Component {
  constructor() {
    super();

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
    console.log(this.props)
    return (
      <Aux >

        <Navbar className="navbar-main" color="light" light toggleable>
          {/* <NavbarBrand className="navbarbrand link" src="" href="/">Neighborhood Watch</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            <Nav className="m-auto items-nav" navbar>
              <NavItem>
                <NavLink className="navbarbrand link" href="/">News  </NavLink>
              </NavItem>
              <NavItem>
                <div className="abc"> aaaa </div>
              </NavItem>
              <NavItem>
                <NavLink className="navbarbrand link" href="#">  Events </NavLink>
              </NavItem>
              <NavItem>
              <div className="abc"> aaaa </div>
              </NavItem>
              <NavItem>
                <NavLink className="navbarbrand link" href="/">  For Sale </NavLink>
              </NavItem>
              <NavItem>
              <div className="abc"> aaaa </div>
              </NavItem>
              <NavItem>
                <NavLink className="navbarbrand link" href="/">  Recipes  </NavLink>
              </NavItem>
              <NavItem>
              <div className="abc"> aaaa </div>
              </NavItem>
              <NavItem>
                <NavLink className="navbarbrand link" href="/new">  Post</NavLink>
              </NavItem>
            </Nav>
          
                <Register handleChange={this.props.handleChange} handleRegistration={this.props.handleRegistration} />
             
                <Login username={this.props.username} password={this.props.password} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
              
                <Logout handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
              
          </Collapse>
        </Navbar>
      </Aux>

    );
  }
}

