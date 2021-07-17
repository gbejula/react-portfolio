import Delicious from '../images/delimeals.png';
import Store from '../images/store-app.png';
import { Row, Container } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className='title-heading'>Portfolio</h2>
          <div className='project-box'>
            <div className='box'>
              <img className='box1' src={Delicious} alt='food-store' />

              <p className='img-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                odit ab. Voluptates error, aspernatur asperiores soluta
                distinctio culpa delectus neque!
              </p>
            </div>

            <div className='box'>
              <img className='box1' src={Store} alt='store-app' />

              <p className='img-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                odit ab. Voluptates error, aspernatur asperiores soluta
                distinctio culpa delectus neque!
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
