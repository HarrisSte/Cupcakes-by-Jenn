import { Container, Row, Col } from 'react-bootstrap';

import './welcome.css';

const occasions = [
  {
    img: 'birthdays',
    title: 'Birthdays',
    description: 'birthday cupcakes',
    href: '/menu',
  },
  {
    img: 'weddings',
    title: 'Weddings',
    description: 'wedding cupcakes',
    href: '/menu',
  },
  {
    img: 'weddings',
    title: 'Holidays',
    description: 'holiday cupcakes',
    href: '/menu',
  },
  {
    img: 'graduations',
    title: 'Graduations',
    description: 'graduation cupcakes',
    href: '/menu',
  },
];

function Welcome() {
  return (
    <Container className='welcome'>
      <Row>
        <Col>
          <div className='title-container'>
            <h2 className='title'>
              <span className='title-word title-word-1'>Baking up </span>
              <span className='title-word title-word-2'>a little </span>
              <br></br>
              <span className='title-word title-word-3'>piece of </span>
              <span className='title-word title-word-4'>Heaven.</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        {occasions.map((occasion, index) => (
          <Col key={index} className='occasions'>
            <a href={occasion.href}>
              <div className='image-container'>
                <img
                  src={`https://picsum.photos/id/${index + 1}/300/300`}
                  alt={occasion.description}
                />
                <div>{occasion.title}</div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Welcome;
