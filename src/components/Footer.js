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
                <a
                  classsName='handles'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/gbejula'>
                  <i className='font-icons fab fa-2x fa-github' />
                </a>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='font-icons fab fa-2x fa-linkedin-in' />
                </a>
                <a
                  href='https://twitter.com/cgbejula'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='font-icons fab fa-2x fa-twitter' />
                </a>
                <a
                  href='https://facebook.com/ajayig'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='font-icons fab fa-2x fa-facebook-f' />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
