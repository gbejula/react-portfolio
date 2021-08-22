import { Row, Container } from 'react-bootstrap';
import CardContainer from '../components/CardContainer';
import card_data from '../components/card_data';

const Portfolio = props => {
  return (
    <>
      <Container>
        {/* <h2 className='title-heading'>Portfolio</h2> */}
        <Row>
          {card_data.map((card, index) => (
            <CardContainer
              image={card.image}
              header={card.header}
              about={card.about}
              description={card.description}
              link={card.link}
              key={card.id}
            />
          ))}
        </Row>

        {/* 
          <div className='project-box'>
            <div className='box'>
              <img className='box1' src={Delicious} alt='food-store' />

              <p className='img-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                odit ab. Voluptates error, aspernatur asperiores soluta
                distinctio culpa delectus neque!
              </p>
            </div>


            <Card>
              <Card.Img variant='top' src={card.image} />
              <Card.Body>
                key={card.id}
                <Card.Title>{card.header}</Card.Title>
                <Card.Text>{card.about}</Card.Text>
              </Card.Body>
            </Card>

            
            

             */}
      </Container>
    </>
  );
};

export default Portfolio;
