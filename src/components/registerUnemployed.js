import React, { Component } from 'react';
import { Button, Jumbotron, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Notification from './notification';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class RegisterUnemployed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dateOfBirth: new Date(),
      address: '',
      email: '',
      phoneNumber: '',
      cv: '',
      itmDocuments: '',
      alert: {
        show: false,
        variant: 'danger',
        message: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      ...this.state,
      dateOfBirth: this.state.dateOfBirth.toISOString()
    };

    axios.post('/unemployed/new', body, { crossDomain: true }).then(() => {
      this.showAlert('success', 'Beneficiarul a fost creat cu succes.');
      this.setState({
        name: '',
        dateOfBirth: new Date(),
        address: '',
        email: '',
        phoneNumber: '',
        cv: '',
        itmDocuments: '',
      });
    }).catch(() => {
      this.showAlert('danger', 'A aparut o eroare la crearea beneficiarului.');
    });
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  changeDate(date) {
    this.setState({
      dateOfBirth: date
    });
  }

  showAlert(variant, message) {
    this.setState({
      alert: {
        show: true,
        variant: variant,
        message: message
      }
    });
  }

  render() {
    const alert = (
      <Notification
        variant={this.state.alert.variant}
        message={this.state.alert.message}
        onClose={() => this.setState({ alert: { show: false } })}
      />
    );

    return (
      <Jumbotron>
        {this.state.alert.show ? alert : null}

        <h4>Inregistrare beneficiar</h4>
        <br />
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='name'>
                <Form.Label>Numele beneficiarului</Form.Label>
                <Form.Control type='text' name='name' value={this.state.name} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId='dateOfBirth'>
                <Form.Label>Data nasterii</Form.Label>
                <div style={{ 'display': 'block' }}>
                  <DatePicker name='dateOfBirth' selected={this.state.dateOfBirth} onChange={this.changeDate} />
                </div>
              </Form.Group>
              <Form.Group controlId='address'>
                <Form.Label>Adresa</Form.Label>
                <Form.Control type='text' name='address' value={this.state.address} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={this.state.email} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId='phoneNumber'>
                <Form.Label>Numar de telefon</Form.Label>
                <Form.Control type='text' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} />
              </Form.Group>
              <Button type="submit">Salveaza</Button>
            </Form>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>


      </Jumbotron>
    )
  }
};

export default RegisterUnemployed;
