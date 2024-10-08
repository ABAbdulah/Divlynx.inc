import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from 'react-icons/fa';
import '../css/Footer.css';
import backgroundImage from '../assets/footer2.jpg';
import logoImage from '../assets/4.png';

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
    <footer className="footer" ref={footerRef}>
      <div className="footer-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoImage} alt="Company Logo" />
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
            <li><a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://www.tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer"><FaTiktok /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2024 divlynx Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;