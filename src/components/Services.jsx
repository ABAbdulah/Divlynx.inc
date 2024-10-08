import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from "../assets/service1.jpg";
import image1 from "../assets/service2.jpg";
import image2 from "../assets/service3.jpg";
import image3 from "../assets/service4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faDraftingCompass, faGamepad, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import '../css/Services.css';
import logo from '../assets/3.png';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import ClientStories from './ClientStories';

// import Footer from './Footer';

const Services = () => {
  const images = [
    { url: backgroundImage, text: "Full Stack Web Development", description: "Our full-stack web development services encompass both front-end and back-end development, ensuring robust, scalable, and interactive web applications. From initial concept to deployment and maintenance, we utilize cutting-edge technologies and frameworks to deliver tailored solutions that meet your business needs." },
    { url: image1, text: "UI / UX Designing", description: "We emphasize user-centered design principles to enhance user satisfaction and usability. From wireframing to prototyping and final design, we ensure seamless navigation and engaging experiences across various devices." },
    { url: image2, text: "Digital Marketing", description: "We offer comprehensive strategies including SEO, PPC advertising, social media marketing, content marketing, and email campaigns. Our goal is to maximize your ROI and achieve measurable results." },
    { url: image3, text: "Game Development", description: "Our game development services cover everything from initial concept to final deployment, ensuring high-quality experiences that resonate with players." }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const cardRefs = useRef([]);
  const h2Ref = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setAnimationClass('swipe-out');
      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setAnimationClass('swipe-in');
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setAnimationClass('swipe-out');
    setTimeout(() => {
      setCurrentImageIndex(nextIndex);
      setAnimationClass('swipe-in');
    }, 500);
  };

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    transition: 'background-image 1s ease-in-out'
  };

  const textContainerStyle = {
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <>
  
    <div className="services-container">
      <h2 className='h11' ref={h2Ref}>
        Elevate Your Digital Potential with Our <span className="highlight">Expert Solutions</span>
      </h2>     
      <hr className="separator" />
      <div className="services-cards-container">
        <div className="service-card" ref={el => cardRefs.current[0] = el}>
          <FontAwesomeIcon icon={faCode} className="service-icon" />
          <h3>Web Applications</h3>
          <p>Transform your digital presence with our expert web development services. We craft responsive, user-friendly websites.</p>
        </div>
        <div className="service-card" ref={el => cardRefs.current[1] = el}>
          <FontAwesomeIcon icon={faDraftingCompass} className="service-icon" />
          <h3>UI / UX Designing</h3>
          <p>Enhance user satisfaction with our intuitive UI/UX design services. We create visually appealing websites & seamless interfaces.</p>
        </div>
        <div className="service-card" ref={el => cardRefs.current[2] = el}>
          <FontAwesomeIcon icon={faGamepad} className="service-icon" />
          <h3>Game Development</h3>
          <p>Our game development team brings your game ideas to life, creating immersive and captivating experiences that engage players.</p>
        </div>
        <div className="service-card" ref={el => cardRefs.current[3] = el}>
          <FontAwesomeIcon icon={faBullhorn} className="service-icon" />
          <h3>Digital Marketing</h3>
          <p>Amplify your online visibility with our comprehensive digital marketing services. We deliver tailored strategies that boost brand awareness.</p>
        </div>
      </div>
      <div className={`background-image ${animationClass}`} style={backgroundStyle} ref={backgroundRef}>
        <div className="service-text" style={textContainerStyle}>
          <h3>{images[currentImageIndex].text}</h3>
          <p>{images[currentImageIndex].description}</p>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="next-icon" onClick={handleNextImage} />
      </div>
    </div>
    <ClientStories/>
    </>
  );
}

export default Services;
