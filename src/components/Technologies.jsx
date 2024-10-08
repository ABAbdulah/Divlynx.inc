import React, { useEffect, useRef } from 'react';
import '../css/Technologies.css';

// Importing icon images
import codeIcon from '../assets/icon1.jpeg';
import paintIcon from '../assets/icon2.jpeg';
import gameIcon from '../assets/icon3.jpeg';
import htmlIcon from '../assets/icon4.png';
import cssIcon from '../assets/icon5.jpeg';
import jsIcon from '../assets/icon6.png';
import unityIcon from '../assets/icon7.jpg';
import unrealIcon from '../assets/icon8.png';
import dbIcon from '../assets/icon9.jpeg';
import SqlIcon from '../assets/icon10.png';
import PsIcon from '../assets/icon11.jpeg';
import CanvaIcon from '../assets/icon12.jpeg';
import NodeIcon from '../assets/icon13.png';
import NextIcon from '../assets/icon14.jpeg';
import CsharpIcon from '../assets/icon15.jpeg';
import PyIcon from '../assets/icon16.jpeg';
import logo from '../assets/4.png'; // Import your logo image
import Services from './Services';

const Technologies = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
    <div className="vision-wrapper">
      <div className="dynamic-headline-bar">
        <div className="icon-container">
          {/* Icon elements */}
          <div className="icon"><img src={codeIcon} alt="Code Icon" /></div>
          <div className="icon"><img src={paintIcon} alt="Paint Icon" /></div>
          <div className="icon"><img src={gameIcon} alt="Game Icon" /></div>
          <div className="icon"><img src={htmlIcon} alt="Html Icon" /></div>
          <div className="icon"><img src={cssIcon} alt="Css Icon" /></div>
          <div className="icon"><img src={jsIcon} alt="Js Icon" /></div>
          <div className="icon"><img src={unityIcon} alt="Unity Icon" /></div>
          <div className="icon"><img src={unrealIcon} alt="Unreal Engine Icon" /></div>
          <div className="icon"><img src={dbIcon} alt="MongoDB Icon" /></div>
          <div className="icon"><img src={SqlIcon} alt="SQL Icon" /></div>
          <div className="icon"><img src={PsIcon} alt="Ps Icon" /></div>
          <div className="icon"><img src={CanvaIcon} alt="Canva Icon" /></div>
          <div className="icon"><img src={NodeIcon} alt="Node Icon" /></div>
          <div className="icon"><img src={NextIcon} alt="Next Icon" /></div>
          <div className="icon"><img src={CsharpIcon} alt="Csharp Icon" /></div>
          <div className="icon"><img src={PyIcon} alt="Python Icon" /></div>
        </div>
      </div>
      <h1 className="vision-heading1">Let's Discuss about the basics first, </h1> 
      <h2 className="vision-heading2">What's the motive behind divlynx?</h2>
      <section className="vision-section">
        <div className="vision-logo-container">
          <img src={logo} alt="Logo" className="vision-logo" />
        </div>
        <div className="vision-content">
          <p ref={textRef} className="vision-text">
            At divLynx,
            <br /><br />
            “Our vision is to revolutionize the tech landscape by creating innovative software solutions that empower businesses to thrive in a digital world.”
            <br /><br />
            Together, we’re shaping the future, one line of code at a time. 🌐✨
          </p>
        </div>
      </section>
    </div>
   <Services/>
    </>
  );
}

export default Technologies;
