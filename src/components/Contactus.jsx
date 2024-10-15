import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/ContactUs.css'; // Import your custom CSS file
import contactImg from '../assets/inspiration.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Footer';
function ContactUs() {
  return (
    <>
    <div id='contact'>
      <div className="text-center">
        <h1>Tell Us About Your Idea</h1>
      </div>

      {/* Full-width banner below the heading */}
      <div className="full-width-banner">
        <p>We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals.</p>
      </div>

      <div className="container-fluid mt-5"> {/* Make the container full-width */}
  <Row className="align-items-center">
    {/* Left side for the image */}
    <Col md={5} className="position-relative">
      <Image
        src={contactImg}
        alt="Team Meeting"
        fluid
        className="contact-image"
      />
      <div className="image-text-overlay">
        <h2>Be the Leader, <br /> Make it Happen.</h2>
      </div>
    </Col>
          {/* Right side for the form */}
          <Col md={6} className="form-col"> {/* Keep md={6} to ensure equal column sizes */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 text-center">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
            <Form>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCompany">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Company Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRegion">
                <Form.Label>Region*</Form.Label>
                <Form.Control as="select">
                  <option>Please Select</option>
                  <option>Region 1</option>
                  <option>Region 2</option>
                  <option>Region 3</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formProjectDetails">
                <Form.Label>Project Details*</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Project Details" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
<Footer/>
</div>
    </>
  );
}

export default ContactUs;
