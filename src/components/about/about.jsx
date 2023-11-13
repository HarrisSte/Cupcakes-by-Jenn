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
          from scratch for over 12 years and launched my business in 2016.
          Initially, I made cupcakes for work functions and received suggestions
          to open a cupcake business. Hence, Cupcakes by Jenn was born. I began
          with small orders for birthday and graduation parties, but as word
          spread, I started receiving requests for large cupcake orders for
          weddings as well. With a wealth of diverse experiences, I'm now
          looking to expand my business. Currently, I have a full-time day job
          and am not planning to open a full-fledged shop at this point, but I'm
          enthusiastic about gradually expanding my offerings. If you are
          interested in having Cupcakes by Jenn cupcakes available for sale at
          your business, please don't hesitate to reach out. To learn more about
          my experiences in baking competitions, please visit my awards page.{' '}
          <br></br>
          <br></br>If you're still reading, you might be curious to know more
          about me. I grew up in Iowa and have primarily lived in the Midwest.
          Although I've visited numerous places where I could envision living, I
          still consider Iowa my home for now. When I'm not working my full-time
          job or baking cupcakes, I spend my time with my small group of pets. I
          have two French Bulldogs living with me, along with four cats. Remy
          LeBeau and Rogue, my Frenchies, are now 6 years old and enjoy lounging
          on the couch. My cats range in age from 6 months to 8 years: Xavier is
          8, Logan is 6.5, and my two kittens, Emma Frost and Raven Darkholme,
          are 6 months old and are siblings. You may have noticed a theme in the
          naming of my pets, and if you guessed "X-Men," you're correct. I'm a
          devoted comic book enthusiast, and I also have a passion for Anime.
          <br></br>
          <br></br>I'll save some exciting details in case you decide to book a
          baking class with me. Yes, you read that correctly; I will soon be
          offering to show you how Cupcakes by Jenn creates her award-winning
          cupcakes!
        </Col>
        <Col>
          <img src={aboutPic} alt='Picture of Jenn' className='profile-image' />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
