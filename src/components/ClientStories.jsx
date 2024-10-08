import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/ClientStories.css';
import clientImg from '../assets/client.jpg'
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientStories() {
  return (
    <>
    <div>
      {/* Why Work With Us Section */}
      <div className="work-with-us-section text-center">
        <h2>Why Work With Us?</h2>
        <p>
          Working with Divlynx Inc. ensures you receive innovative and customized solutions tailored to your business needs. Our dedicated team consistently delivers high-quality results, driving your projects to success and exceeding your expectations. <span className="star">⭐</span>
        </p>
        <div className="action-buttons">
          <Button variant="dark" className="me-3">See Portfolio</Button>
          <Button variant="dark">Let's Talk</Button>
        </div>
      </div>

      {/* Client Stories Section */}
      <div className="client-stories-section">
        <Container>
          <h2 className="text-center">Client Stories</h2>
          <Row className="justify-content-center">
            <Col md={4} sm={12} className="mb-4">
              <Card className="client-card text-center">
                <Card.Img variant="top" src={clientImg} className="rounded-circle client-img" />
                <Card.Body>
                  <Card.Text>
                    "Divlynx transformed our business with their innovative solutions. Their team is incredibly skilled and dedicated."
                  </Card.Text>
                  <Card.Subtitle>- Jane Doe, CEO of Example Co.</Card.Subtitle>
                  <div className="star-rating">★★★★★</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="mb-4">
              <Card className="client-card text-center">
                <Card.Img variant="top" src={clientImg} className="rounded-circle client-img" />
                <Card.Body>
                  <Card.Text>
                    "We saw remarkable improvements in our processes thanks to Divlynx's expertise and commitment."
                  </Card.Text>
                  <Card.Subtitle>- John Smith, CTO of Tech Corp.</Card.Subtitle>
                  <div className="star-rating">★★★★★</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="mb-4">
              <Card className="client-card text-center">
                <Card.Img variant="top" src={clientImg} className="rounded-circle client-img" />
                <Card.Body>
                  <Card.Text>
                    "Working with Divlynx was a game-changer for us. Their solutions are top-notch and their service is excellent."
                  </Card.Text>
                  <Card.Subtitle>- Emily, Director at Business Inc.</Card.Subtitle>
                  <div className="star-rating">★★★★★</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <Portfolio/> 
    </>
  );
}

export default ClientStories;
