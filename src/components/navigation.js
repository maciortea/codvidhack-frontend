import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand='lg' bg="dark" variant="dark">
      <Navbar.Brand href='/'>FixItAll - FIA</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <NavDropdown title='Inregistrare' id='basic-nav-dropdown'>
          <NavDropdown.Item href='/registerProvider'>Furnizor</NavDropdown.Item>
          <NavDropdown.Item href='/registerUnemployed'>Beneficiar</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href='http://51.15.222.108:8000/admin/' target='_blank'>Admin</Nav.Link>
        <Nav.Link href='/about'>Despre</Nav.Link>
      </Nav>
      <Button variant='outline-info'>Search</Button>
    </Navbar>
  );
};

export default withRouter(Navigation);
