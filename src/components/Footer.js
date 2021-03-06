import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center py-3 down'>
            &copy; copyright {currentYear} | Olugbenga Ajayi
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
