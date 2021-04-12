import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import gbenga from '../images/gbenga.jpg';

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-center'>
          <Col
            lg={8}
            md={6}
            sm={1}
            className='justify-content-center align-items-center'>
            <img className='pic' src={gbenga} alt='gbenga' />
          </Col>
          <Col
            className='text-center mt-4 justify-content-center align-items-center'
            lg={12}
            md={6}
            sm={1}>
            <h1>Hi I'm Gbenga,</h1>
            <h1>Full-stack Developer</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
