import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <Container>
        <hr />
        <Row>
          <Col className='text-center py-3 down'>
            <div className='socials'>
              <p className='signature'>
                &copy; {currentYear} | Olugbenga Ajayi
              </p>
              <p>
                <i className='font-icons fab fa-2x fa-github' />
                <i className='font-icons fab fa-2x fa-linkedin-in' />
                <i className='font-icons fab fa-2x fa-twitter' />
                <i className='font-icons fab fa-2x fa-facebook-f' />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
