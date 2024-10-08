import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MainPage.css';
import bg from "../assets/bg.mp4";
import logo12 from "../assets/divlynx.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Technologies from './Technologies';

function MainPage() {
  return (
    <>
    <div className="video-container">
      <video className='videoTag' autoPlay loop muted>
        <source src={bg} type='video/mp4' />
      </video>

      <img src={logo12} alt="Logo" className="logo" />
      
      {/* Updated Navbar with correct classes and responsiveness */}
      <Navbar expand="lg" className="navbar-custom" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#features">Hear about us!</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Heading and Buttons */}
      <div className="heading-container">
        <h1 className='Heading-css'>
          Delivering the best quality work!
        </h1>
        <Button variant="light">Email us</Button>{' '}
        <Button variant="success">Hire us on Upwork</Button>{' '}
      </div>
    </div>
    <Technologies/>
    </>
  );
}

export default MainPage;
