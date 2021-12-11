import { Col } from 'react-bootstrap'

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
              <button className='btn'>Live demo</button>
            </a>
          </div>
        </div>
      </Col>
    </>

    // <Card className='cards'>
    //   <Row>
    //     <Col>
    //       <Card.Img variant='bottom' src={props.image} />
    //       <Card.Body>
    //         <Card.Title>{props.header}</Card.Title>
    //         <Card.Text>{props.about}</Card.Text>
    //         <Card.Text>{props.description}</Card.Text>
    //         <Button variant='primary'>{props.link}</Button>
    //       </Card.Body>
    //     </Col>
    //   </Row>
    // </Card>
  )
}

export default CardContainer
