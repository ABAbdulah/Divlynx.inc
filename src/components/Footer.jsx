import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from 'react-icons/fa';
import '../css/Footer.css';
import backgroundImage from '../assets/footer2.jpg';
import logoImage from '../assets/4.png';
import { Link } from 'react-scroll';
import { Navbar } from 'react-bootstrap';
import GotoTop from './GotoTop';
import ScrolltoTopButton from './ScrolltoTopButton';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } 
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const elements = footerRef.current.querySelectorAll('.footer-content, .footer-logo, .footer-section, .footer-section h3, .footer-section ul, .footer-section p, .footer-section a, .social-media, .social-media li, .email, .footer-copyright');

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
    <GotoTop/>

    <footer className="footer" ref={footerRef}>
      <div className="footer-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="footer-content">
        <div className="footer-logo">

        <Navbar.Brand href="#">
        <Link to="motive" spy={true} smooth={true} offset={-50} duration={500} onSetActive={() => console.log('Scrolling to motive')}>
              <img
                  src={logoImage}
                  alt="ElClub Logo"
                  style={{ height: '80px' }}
                />
              </Link>
            </Navbar.Brand>
        </div>
       
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Game Development</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">UI/UX Designing</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Ease of Access</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Islamabad Capital Territory, Pakistan</p>
          <p>Call us @ +92 328 7526428</p>
          <p className="email">
            <a href="mailto:divlynx.inc@gmail.com">
              <FaEnvelope /> <span>divlynx.inc@gmail.com</span>
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="https://www.facebook.com/profile.php?id=61560996815237" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2FdivLynxinc%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1jVa6iNn7a0hnzismVB3r0xQrWbeQjjK2o5S847Dsyx7lHdDT9tPMqmLU_aem_W58cc585hA8EJevN19TSrA&h=AT2_ndIwLyFThi2zVY1oITxsL-ZVh96YByMY5xxxbHvm8GfZL0NIV8XhphI_yyvHn1x6kgPojnpVZOaEnfphffbsfZpka0P4suqE9Y84x7vauCLN61DIiwyykzUuf8zesaSX" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/company/divlynx/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2024 divlynx Inc. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;