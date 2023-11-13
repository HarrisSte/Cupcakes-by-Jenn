import { Container, Row, Col } from 'react-bootstrap';
// import awardPic from '../../assets/awardPic.jpg';

import './awards.css';

function Awards() {
  return (
    <Container className='award-info'>
      <Row>
        <Col>
          <div className='award-container'>
            <h2 className='award-title'>
              <span className='title-word title-word-1'> 2</span>
              <span className='title-word title-word-2'>0</span>
              <span className='title-word title-word-3'>2</span>
              <span className='title-word title-word-4'>3</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b>1st</b> -- Apple Dessert -- Apple Pie
          </p>
        </Col>
        <Col>
          <p>Category</p>
          <a></a>
        </Col>
        <Col>
          <p>Cupcake</p>
          <a></a>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='batter-container'>
            <h2 className='batter-title'>
              <span className='title-word title-word-1'> 2</span>
              <span className='title-word title-word-2'>0</span>
              <span className='title-word title-word-3'>2</span>
              <span className='title-word title-word-4'>2</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Buttercream Style</p>
          <a></a>
        </Col>
        <Col>
          <p>Cream Cheese Style</p>
          <a></a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Whipped Style</p>
          <a></a>
        </Col>
      </Row>
    </Container>
  );
}

export default Awards;
