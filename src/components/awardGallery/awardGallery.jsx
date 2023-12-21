import { Container, Row, Col } from 'react-bootstrap';

import cupckImg1 from '../../assets/applePie.jpg';
import cupckImg2 from '../../assets/strawberryCrunch.jpg';
import cupckImg3 from '../../assets/caraBacon.jpg';

import './awardGallery.css';

const foodPics = [
  {
    img: cupckImg1,
    title: 'Apple Pie Cupcake',
    description: 'Apple Dessert',
    place: '1st Place',
  },
  {
    img: cupckImg2,
    title: 'Strawberry Crunch',
    description: 'Breast Cancer Awareness',
    place: '1st Place',
  },
  {
    img: cupckImg3,
    title: 'Chocolate Caramel Bacon',
    description: 'Bacon, Bacon, Bacon',
    place: '1st Place & Overall',
  },
];

function Gallery() {
  return (
    <Container>
      <Row>
        {foodPics.map((foodPic, index) => (
          <Col key={index} sm={4} className=''>
            <div className='hover hover-1 text-white rounded mb-3'>
              <img src={foodPic.img} alt={foodPic.description} />
              <div className='hover-overlay'></div>
              <div className='hover-1-content px-5 py-4'>
                <h3 className='hover-1-title font-weight-bold mb-0'>
                  <span className='bi bi-award-fill'> {foodPic.title}</span>
                </h3>
                <p className='hover-1-description mb-0'>
                  {foodPic.description}
                  <br></br>
                  {foodPic.place}
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
