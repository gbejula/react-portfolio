import { Col } from 'react-bootstrap';

const CardContainer = props => {
  return (
    <>
      <Col>
        <div className='project-box'>
          <div className='box'>
            <img className='box1' src={props.image} alt='food-store' />

            <p className='head'>{props.header}</p>
            <p className='img-text'>{props.about}</p>
            <p className='describe'>{props.description}</p>
            <a
              href={props.link}
              target='_blank'
              rel='noopener noreferrer'
              className='demo'>
              Live demo
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardContainer;
