import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import gbenga from '../images/gbenga.jpg'
import { HashLink } from 'react-router-hash-link'
import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import {
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
} from 'react-icons/si'
import { BsBootstrapFill } from 'react-icons/bs'

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col xs={12} md={8} className='text'>
            <h1 className='title'>Hi, I'm Gbenga, a Frontend Developer.</h1>
            <p className='message'>
              I create responsive web applications with an eye for beautiful
              user interface and experience.{' '}
            </p>
            <Link to='/portfolio'>
              <button type='button' className='btn'>
                Projects
              </button>
            </Link>{' '}
            <HashLink smooth to='/#skills'>
              <button type='button' className='btn'>
                Skills
              </button>
            </HashLink>
          </Col>

          <Col className='pix'>
            <img className='pic' src={gbenga} alt='gbenga' />
          </Col>
        </Row>

        <section>
          <div className='about'>
            <h3 className='center'>About me</h3>
            <p className='bio'>
              I am a Self-Taught Front-End Developer with over 2 years of
              experience that enjoys creating responsive and interactive
              websites and applications. I am currently skilled in HTML5, CSS3,
              Bootstrap, JavaScript and ReactJs. I am a life-long learner and I
              enjoy learning new things everyday. My quest for learning has
              prompted curiosity to know how the backend technology works,
              hence, I am learning about Nodejs and Express.
              <br /> <br />I have a Bachelor's degree in computer engineering. I
              forward to contributing to my skills and education to an
              organization that fosters growth, learning and career progression.
            </p>
          </div>
        </section>

        <section id='skills'>
          <h2 className='technology-heading'>My Skills</h2>

          <div className='skills-group'>
            <div className='html-box'>
              <FaHtml5 className='resize-img' />
              <p className='tech'>html5</p>
            </div>
            <div className='skill-container-logo'>
              <FaCss3Alt className='resize-img' />
              <p className='tech'>css3</p>
            </div>

            <div className='skill-container-logo'>
              <FaReact className='resize-img' />
              <p className='tech'>React</p>
            </div>

            <div className='skill-container-logo'>
              <SiJavascript className='resize-img' />
              <p className='tech'>javascript</p>
            </div>
            <div className='skill-container-logo'>
              <FaNodeJs className='resize-img' />
              <p className='tech'>Nodejs</p>
            </div>
            <div className='skill-container-logo'>
              <SiFirebase className='resize-img' />
              <p className='tech'>firebase</p>
            </div>

            <div className='skill-container-logo'>
              <SiMongodb className='resize-img' />
              <p className='tech'>Mongo DB</p>
            </div>
            <div className='skill-container-logo'>
              <SiNextdotjs className='resize-img' />
              <p className='tech'>Nextjs</p>
            </div>

            <div className='skill-container-logo'>
              <BsBootstrapFill className='resize-img' />
              <p className='tech'>Bootstrap</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default HomeScreen
