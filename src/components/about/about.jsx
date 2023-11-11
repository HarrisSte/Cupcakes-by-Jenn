import { Container, Row, Col } from 'react-bootstrap';
import aboutPic from '../../assets/aboutPic.jpg';

import './about.css';

function About() {
  return (
    <Container>
      <Row>
        <Col className='about-info'>
          Hello there! Welcome to Cupcakes by Jenn, my cupcake business. My
          name, as you may have guessed, is Jenn. I have been baking cupcakes
          from scratch for over 12 years and started my business in 2016. I
          often made cupcakes for work functions and was told I should open a
          cupcake business, so thus Cupcakes by Jenn was born. I started off by
          mainly doing small orders for birthday or graduation parties, but as
          word spread, I have been asked to do large cupcake orders a few
          weddings as well. So now with lots of different experiences under my
          belt, I am looking to expand my business. I currently do have a full
          time day job and am not looking to open a full fledged shop at this
          point but would love to slowly grow what I do. If you are interest in
          having Cupcakes by Jenn cupcakes available at your business for sale,
          please reach out. And to read about my experiences with baking
          competitions, head over to my award page. <br></br>
          <br></br>
          If you’re still reading, you might be interested in learning more
          information about me. I grew up in Iowa and have basically only lived
          in the Midwest. I have visited tons of places that I could see myself
          living, but for now I still call Iowa home. When I am not working my
          full time job or baking cupcakes - I spend time with my little herd of
          animals. I have two French bulldogs who live with me, plus four cats.
          Remy LeBeau and Rogue, my frenchies, are 6 years old now and are big
          couch potatoes. My cats range from 8 years to 6 months old. Xavier is
          8, Logan is 6.5, and my two kittens are Emma Frost and Raven Darkholme
          who are 6 months and are siblings. Now you may see a theme in the
          naming of my pets - and if you guessed X-Men - you were right. I am a
          huge comic book nerd, I also nerd out on Anime too! But I will save
          some juicy information for in case you decide to book a cooking class
          with me. Yes, you read that right, I will soon be offering to show you
          how Cupcakes by Jenn makes her award winning cupcakes!!!
        </Col>
        <Col>
          <img
            src={aboutPic}
            alt='Picture of Jenn'
            className='profile-image'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
