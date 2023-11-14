import { Container, Row, Col } from 'react-bootstrap';

import Contact from '../contact/contact.jsx';

import bdayImg from '../../assets/birthday.jpg';
import gradImg from '../../assets/graduation.jpg';
import weddgImg from '../../assets/wedding.jpg';
import hlidyImg from '../../assets/holiday.jpg';

import './welcome.css';

const occasions = [
  {
    img: bdayImg,
    title: 'Birthdays',
    description: 'birthday cupcakes',
    href: '/menu',
  },
  {
    img: weddgImg,
    title: 'Weddings',
    description: 'wedding cupcakes',
    href: '/menu',
  },
  {
    img: hlidyImg,
    title: 'Holidays',
    description: 'holiday cupcakes',
    href: '/menu',
  },
  {
    img: gradImg,
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
        <Col>
          <h3>
            Welcome to the sweetest corner of Des Moines, where cupcakes aren't
            just desserts; they're tiny, delectable works of art! At Jenn's
            Award Winning Cupcakes, we sprinkle a dash of love into every
            batter, creating confections that not only satisfy your sweet tooth
            but also win hearts. Explore our gallery of delightful flavors, from
            classic vanilla dreams to exotic caramel creations. Join us in the
            pursuit of sweetness – because here, every cupcake is a tiny
            celebration, and you're invited to the party! 🧁✨
          </h3>
        </Col>
      </Row>
      <Row>
        {occasions.map((occasion, index) => (
          <Col key={index} className='occasions'>
            <a href={occasion.href}>
              <div className='image-container'>
                <img src={occasion.img} alt={occasion.description} />
                <div>{occasion.title}</div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <div className='contact-container'>
            <Contact />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
