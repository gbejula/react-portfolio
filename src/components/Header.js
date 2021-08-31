import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg='light'
        fixed='top'
        variant='light'
        expand='lg'>
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
              <LinkContainer to='/about'>
                <Nav.Link exact activeClassName='active' className='links ml-4'>
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link className='links ml-4'>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
