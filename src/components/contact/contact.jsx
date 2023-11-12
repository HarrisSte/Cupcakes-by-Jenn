import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (name && email && message) {
      const serviceId = '';
      const templateId = '';
      const userId = '';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Oops, all fields are required.');
    }
  };

  return (
    <Container>
      <Row>
        <Col className='contact-socials' sm={4}>
          <h2>Let's talk cupcakes...</h2>
          <h5>
            Send me a message directly to my email or find me on my social media
            accounts! <br></br>
            <br></br>
            I'll be sure to get back to you as soon as possible.
          </h5>
          <a href='https://www.facebook.com/cupcakesbyjenn515'>
            <i className='bi bi-facebook'></i>
          </a>
          <a href='https://www.instagram.com/cupcakes_by_jenn/'>
            <i className='bi bi-instagram'></i>
          </a>
        </Col>
        <Col sm={8}>
          <div className='contact-form'>
            <input
              className='name mb-1'
              type='text'
              placeholder='First and Last Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='email mb-1'
              type='email'
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Leave your message here!'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='contact-submit' onClick={submit}>
              Send my message!
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
