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
          </Col>

          <Col className='pix'>
            <img className='pic' src={gbenga} alt='gbenga' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
