import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import gbenga from '../images/gbenga.jpg';
import html from '../images/html5.png';
import css from '../images/css3.png';
import js from '../images/js.png';
import react from '../images/react2.png';
import node from '../images/nodejs.png';
import mongo from '../images/mongo.png';
import firebase from '../images/firebase.png';
// import typescript from '../images/typescript.png';
import next from '../images/nextjs.png';
import bootstrap from '../images/bootstrap.svg';
import { HashLink } from 'react-router-hash-link';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col xs={12} md={8} className='text'>
            <h1 className='title'>Hi, I'm Gbenga, a Frontend Developer.</h1>
            <p className='message'>
              I create responsive web applications with an eye for beautiful
              user interface and experience,{' '}
              <Link className='learnmore' to='/about'>
                learn more
              </Link>
            </p>
            <Link to='/portfolio'>
              <button type='button' className='btn'>
                Projects
              </button>
            </Link>{' '}
            <HashLink smooth to='/#technology'>
              <button type='button' className='btn'>
                Skills
              </button>
            </HashLink>
          </Col>

          <Col className='pix'>
            <img className='pic' src={gbenga} alt='gbenga' />
          </Col>
        </Row>

        <section id='technology'>
          <h2 className='technology-heading'>My Skills</h2>
          <div className='icons'>
            <div>
              <img src={html} alt='html' className='scale' />
              <p className='tech'>html5</p>
            </div>
            <div>
              <img src={css} alt='css' className='scale' />
              <p className='tech'>css3</p>
            </div>
            <div>
              <img src={js} alt='js' className='scale' />
              <p className='tech'>js</p>
            </div>
            <div>
              <img src={react} alt='react' className='scale' />
              <p className='tech'>React</p>
            </div>
            <div>
              <img src={node} alt='nodejs' className='scale' />
              <p className='tech'>Nodejs</p>
            </div>
            <div>
              <img src={mongo} alt='mongodb' className='scale' />
              <p className='tech'>Mongo DB</p>
            </div>
            <div>
              <img src={firebase} alt='firebase' className='scale' />
              <p className='tech'>firebase</p>
            </div>
            <div>
              <img src={next} alt='nextjs' className='scale' />
              <p className='tech'>Nextjs</p>
            </div>
            {/* <div>
              <img src={typescript} alt='typescript' className='scale' />
              <p className='tech'>Typescript</p>
            </div> */}
            <div>
              <img src={bootstrap} alt='bootstrap' className='scale' />
              <p className='tech'>Bootstrap</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomeScreen;
