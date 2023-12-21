import { Container, Row, Col } from 'react-bootstrap';

import foodImg1 from '../../assets/birthday.jpg';

import './gallery.css';

const foodPics = [
  {
    img: foodImg1,
    title: 'Shashlik',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg1,
    title: 'cupcake',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
  {
    img: foodImg1,
    title: 'cupcake',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    // href: '/menu',
  },
];

function Gallery() {
  return (
    <Container>
      <Row>
        {foodPics.map((foodPic, index) => (
          <Col key={index} lg={6} className=''>
            <div className='hover hover-1 text-white rounded mb-3'>
              <img src={foodPic.img} alt={foodPic.description} />
              <div className='hover-overlay'></div>
              <div className='hover-1-content px-5 py-4'>
                <h3 className='hover-1-title text-uppercase font-weight-bold mb-0'>
                  <span>{foodPic.title}</span>
                </h3>
                <p className='hover-1-description mb-0'>
                  {foodPic.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
