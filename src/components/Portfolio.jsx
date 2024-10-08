import React from 'react';
import '../css/Portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UIux from '../assets/uiux.mp4';
import fullstack from '../assets/fullstack.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ContactUs from './Contactus';

function Portfolio() {
  return (
 <>
    <div className='margin-top'>
    
    <h2 className="text-center mb-4">Explore Some of Our Latest Projects</h2>
      <div className="full-width-banner">
        <p>At Divlynx Inc, we enable clients globally to leverage modern technology and enhance customer experiences.</p>
      </div>
    <Container className="portfolio-section mt-5">
      
      <Row>
  <Col md={6} sm={12} className="mb-4">
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title className="text-center">UI/UX Designing</Card.Title>
        <video autoPlay loop muted className="video-container">
          <source src={UIux} type="video/mp4" />
        </video>
       <div className='card-text-custom'>
        <Card.Text>
          These are the highlights of our ability to create intuitive and engaging user interfaces and experiences that delight users.
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
  </Col>

  <Col md={6} sm={12} className="mb-4">
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title className="text-center">Full Stack Web Development</Card.Title>
        <Card.Img variant="top" src={fullstack} />
        <Card.Text>
          We've got experience in building robust and scalable web applications using the latest technologies.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
    </Container>
    </div>
    <ContactUs/>
    </>
  );
}

export default Portfolio;
