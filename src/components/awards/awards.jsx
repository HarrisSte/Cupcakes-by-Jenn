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
          <h3>Honorable Mention</h3>
          <p>
            <b>Always Room for Dessert</b>
            <br></br>Apple Pie
          </p>
        </Col>
        <Col>
          <h3>Overall</h3>
          <p>
            <b>Iowa Orchard</b>
            <br></br>Apple Pie
          </p>
        </Col>
        <Col>
          <h3>1st</h3>
          <p>
            <b>Apple Dessert</b>
            <br></br>Apple Pie
          </p>
          <p>
            <b>Iowa Orchard</b>
            <br></br>Apple Pie
          </p>
        </Col>
        <Col>
          <h3>3rd</h3>
          <p>
            <b>Splenda Low to No Sugar Showdown</b>
            <br></br>Key Lime Pie
          </p>
          <p>
            <b>Anything Goes, Everything Goes</b>
            <br></br>Orange Creamcicle
          </p>
          <p>
            <b>Breakfast Cake</b>
            <br></br>Banana Nut French Toast
          </p>
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
          <h3>Overall</h3>
          <p>
            <b>Bacon, Bacon, Bacon</b>
            <br></br>Chocolate Caramel Bacon
          </p>
        </Col>
        <Col>
          <h3>1st</h3>
          <p>
            <b>Bacon, Bacon, Bacon</b>
            <br></br>Chocolate Caramel Bacon
          </p>
          <p>
            <b>Breast Cancer</b>
            <br></br>Strawberry Crunch
          </p>
        </Col>
        <Col>
          <h3>2nd</h3>
          <p>
            <b>Hyvee cake</b>
            <br></br>Cherry Almond
          </p>
        </Col>
        <Col>
          <h3>3rd</h3>
          <p>
            <b>Always Room for Dessert</b>
            <br></br>Apple Cider
          </p>
          <p>
            <b>Iowa's Big Four</b>
            <br></br>Chocolate Caramel Bacon
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='batter-container'>
            <h2 className='batter-title'>
              <span className='title-word title-word-1'> 2</span>
              <span className='title-word title-word-2'>0</span>
              <span className='title-word title-word-3'>2</span>
              <span className='title-word title-word-4'>1</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>3rd</h3>
          <p>
            <b>Nostalgic</b>
            <br></br>German Chocolate
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='batter-container'>
            <h2 className='batter-title'>
              <span className='title-word title-word-1'> 2</span>
              <span className='title-word title-word-2'>0</span>
              <span className='title-word title-word-3'>1</span>
              <span className='title-word title-word-4'>9</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>2nd</h3>
          <p>
            <b>Innovative Chocolate</b>
            <br></br>Spicy Mexican Hot Chocolate
          </p>
          <p>
            <b>Iowa's Big Four</b>
            <br></br>Maple Bacon Breakfast
          </p>
          <p>
            <b>Create a Winner with Gurleys</b>
            <br></br>Banana Nut French Toast
          </p>
        </Col>
        <Col>
          <h3>3rd</h3>
          <p>
            <b>Best Templeton Rye Dessert</b>
            <br></br>Whiskey Smash
          </p>
          <p>
            <b>Beginners Contest</b>
            <br></br>Carrot Cake
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Awards;
