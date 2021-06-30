import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='light' fixed='top' variant='light' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand'>Olugbenga Ajayi</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='links ml-4'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/portfolio'>
                <Nav.Link className='links ml-4'>Portfolio</Nav.Link>
              </LinkContainer>
              <Nav.Link className='links ml-4' href='/about'>
                About
              </Nav.Link>
              <Nav.Link className='links ml-4' href='/contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
