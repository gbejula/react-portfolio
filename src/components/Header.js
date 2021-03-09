import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg='light' variant='light' expand='lg'>
        <Container>
          <Navbar.Brand className='brand' href='#home'>
            Olugbenga Ajayi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link className='links ml-4' href='/home'>
                Home
              </Nav.Link>
              <Nav.Link className='links ml-4' href='/link'>
                Portfolio
              </Nav.Link>
              <Nav.Link className='links ml-4' href='/portfolio'>
                About
              </Nav.Link>
              <Nav.Link className='links ml-4' href='/contact'>
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;