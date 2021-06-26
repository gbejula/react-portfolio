import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import gbenga from '../images/gbenga.jpg';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col xs={12} md={8} className='text'>
            <h1 className='title'>Hi, I'm Gbenga, a Full-stack Developer</h1>
            <p className='message'>
              I create responsive web applications with an eye for beautiful
              user interface and experience.
            </p>
            <button className='btn btn-lg'>Projects</button>{' '}
            <button className='btn'>Skills</button>
          </Col>

          <Col className='pix'>
            <img className='pic' src={gbenga} alt='gbenga' />
          </Col>
        </Row>

        <section></section>
      </Container>
    </>
  );
};

export default HomeScreen;
