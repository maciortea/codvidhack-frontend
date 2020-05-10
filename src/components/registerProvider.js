import React, { Component } from 'react';
import { Button, Jumbotron, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Notification from './notification';

class RegisterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
      activityDomain: '',
      fiscalData: '',
      revenue: 0,
      alert: {
        show: false,
        variant: 'danger',
        message: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('/company/new', this.state, { crossDomain: true })
      .then(() => {
        this.showAlert('success', 'Compania a fost creata cu succes.');
        this.setState({
          name: '',
          address: '',
          email: '',
          phoneNumber: '',
          activityDomain: '',
          fiscalData: '',
          revenue: 0,
        });
      }).catch(() => {
        this.showAlert('danger', 'A aparut o eroare la crearea companiei.');
      });
  }

  handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (name === 'revenue') {
      value = parseInt(value)
    }

    this.setState({
      [name]: value
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

        <h4>Inregistrare furnizor</h4>
        <br />
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='name'>
                <Form.Label>Numele furnizorului</Form.Label>
                <Form.Control type='text' name='name' value={this.state.name} onChange={this.handleChange} />
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
              <Form.Group controlId="activityDomain">
                <Form.Label>Tip industrie</Form.Label>
                <Form.Control as="select" name='activityDomain' value={this.state.activityDomain} onChange={this.handleChange}>
                  <option value='farmaceutica'>Farmaceutica</option>
                  <option value='textila'>Textila</option>
                  <option value='medicala'>Medicala</option>
                  <option value='educatie'>Educatie</option>
                  <option value='inginerie'>Inginerie</option>
                  <option value='constructii'>Constructii</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="fiscalData">
                <Form.Label>Cifra de afaceri</Form.Label>
                <Form.Control type="text" name='fiscalData' value={this.state.fiscalData} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId='revenue'>
                <Form.Label>Venit %</Form.Label>
                <Form.Control type='number' name='revenue' value={this.state.revenue} onChange={this.handleChange} />
              </Form.Group>
              <Button type="submit">Salveaza</Button>
            </Form></Col>
          <Col></Col>
          <Col></Col>
        </Row>


      </Jumbotron>
    )
  }
}

export default RegisterProvider;
