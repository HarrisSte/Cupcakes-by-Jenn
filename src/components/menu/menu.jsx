import { Container, Row, Col } from 'react-bootstrap';

import './menu.css';

function Menu() {
  return (
    <Container className='menu'>
      <Row>
        <Col>
          <div className='batter-container'>
            <h2 className='batter-title'>
              Pick your
              <span className='title-word title-word-1'> B</span>
              <span className='title-word title-word-2'>a</span>
              <span className='title-word title-word-3'>t</span>
              <span className='title-word title-word-4'>t</span>
              <span className='title-word title-word-1'>e</span>
              <span className='title-word title-word-2'>r</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Classic Flavors</p>
          <a>
            Vanilla, <b>Chocolate,</b> Cinnamon, <b>Lemon,</b> Almond,{' '}
            <b>Red Velvet</b>, Yellow
          </a>
          <p>Breakfast Inspired</p>
          <a>
            Maple Whiskey, <b>Maple Bacon Breakfast,</b> Banana Nut French
            Toast, <b>Butterbeer</b>, Peanut Butter Cookie,
            <b> Cinnamon French Toast</b>, Mini Mimosa, <b>Churro</b>
          </a>
        </Col>
        <Col>
          <p>Fruit & Dessert</p>
          <a>
            <b>Strawberry Crunch,</b> Pineapple Upside Down, <b>Apple Pie,</b>{' '}
            Cherry Almond, <b>Apple Cider, </b> Strawberry Shortcake,{' '}
            <b>German Chocolate,</b> Peach Cobbler, <b>Fruit Pizza,</b> Dark
            Chocolate Raspberry, <b>Neapolitan,</b> Key Lime,
            <b> Pink Velvet, </b>Oreo,
            <b> Chocolate Chip, </b>
            Pumpkin
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Unique & Gourmet Combinations</p>
          <a>
            {' '}
            <b>Hot Cocoa,</b> Root Beer Float, <b>Chocolate Caramel Bacon,</b>{' '}
            Earl Grey Tea, <b>Gingerbread,</b> Carrot, <b>Spicy Chocolate,</b>{' '}
            Salted Caramel, <b>Salted Caramel Bourbon,</b> Champagne
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='batter-container'>
            <h2 className='batter-title'>
              Pick your
              <span className='title-word title-word-1'> F</span>
              <span className='title-word title-word-2'>r</span>
              <span className='title-word title-word-3'>o</span>
              <span className='title-word title-word-4'>s</span>
              <span className='title-word title-word-1'>t</span>
              <span className='title-word title-word-2'>i</span>
              <span className='title-word title-word-3'>n</span>
              <span className='title-word title-word-4'>g</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Buttercream Style</p>
          <a>
            <b>Vanilla, </b>Chocolate, <b>Caramel, </b>Lemon, <b>Maple, </b>
            Almond, <b>Strawberry, </b> Cinnamon, <b>Browned Butter, </b> Mint,{' '}
            <b>Dark Chocolate, </b>
            Cherry, <b>Cookie Dough, </b> Oreo, <b>Marshmallow, </b> Brown
            Sugar,
            <b> Honey, </b> Vanilla Cream Soda
          </a>
        </Col>
        <Col>
          <p>Cream Cheese Style</p>
          <a>
            <b>Vanilla, </b>Chocolate, <b>Caramel, </b>Lemon, <b>Maple,</b>{' '}
            Almond, <b>Strawberry, </b>Cinnamon, <b>Oreo, </b>Dark Chocolate,
            <b> Cherry</b>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Whipped Style</p>
          <a>
            You can have whipped frosting using <b>any flavor pudding</b> of
            your choice!
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
