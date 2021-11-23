import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import gbenga from '../images/gbenga.jpg';
import html from '../images/html5-rbg.png';
import css from '../images/css3-rbg.png';
import js from '../images/js.png';
import react from '../images/react2.png';
import node from '../images/nodejs.png';
import mongo from '../images/mongo.png';
import firebase from '../images/firebase-rbg.png';
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

          <div className='icons1'>
            <div className='html-box'>
              <img src={html} alt='html' className='resize-img' />
              <p className='tech'>html5</p>
            </div>
            <div className='css-box'>
              <img src={css} alt='css' className='resize-img' />
              <p className='tech'>css3</p>
            </div>

            <div className='react-box'>
              <img src={react} alt='react' className='resize-img' />
              <p className='tech'>React</p>
            </div>
          </div>
          <div className='icons2'>
            <div className='js-box'>
              <img src={js} alt='js' className='resize-img' />
              <p className='tech'>javascript</p>
            </div>
            <div className='node-box'>
              <img src={node} alt='nodejs' className='resize-img' />
              <p className='tech'>Nodejs</p>
            </div>
            <div className='firebase-box'>
              <img src={firebase} alt='firebase' className='resize-img' />
              <p className='tech'>firebase</p>
            </div>
          </div>
          <div className='icons3'>
            <div className='mongo-box'>
              <img src={mongo} alt='mongodb' className='mongo-logo' />
              <p className='tech'>Mongo DB</p>
            </div>
            <div className='next-box'>
              <img src={next} alt='nextjs' className='resize-img' />
              <p className='tech'>Nextjs</p>
            </div>
            {/* <div>
              <img src={typescript} alt='typescript' className='resize-img' />
              <p className='tech'>Typescript</p>
            </div> */}
            <div className='bootstrap-box'>
              <img src={bootstrap} alt='bootstrap' className='resize-img' />
              <p className='tech'>Bootstrap</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomeScreen;
