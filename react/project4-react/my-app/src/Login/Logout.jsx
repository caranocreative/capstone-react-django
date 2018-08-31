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
       
          <Button className="ml-auto log-btns" color="black" onClick={this.toggle}>Logout</Button>
       

        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 700 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Logout</ModalHeader>
          
          
          <ModalBody>
            <Form onSubmit={this.props.handleSubmit} inline>
        
             
              <Button type="submit" onClick={this.toggle}>Logout</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Login;