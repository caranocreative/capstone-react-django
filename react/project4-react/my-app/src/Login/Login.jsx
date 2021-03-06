/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
       
        
          <Button className="ml-auto log-btns" color="black" onClick={this.toggle}>Login</Button>
       
       
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 700 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form inline>
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input type="text" name="username" id="exampleEmail" onChange={this.props.handleChange} placeholder="Email (username)" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" onChange={this.props.handleChange} placeholder="Password" />
              </FormGroup>
              {' '}
              <Button type="submit" onClick={(e) => {this.props.handleSubmit(e); this.toggle()}}>Login</Button>
              
              

            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Login;