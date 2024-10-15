import React, { useState, useEffect } from 'react';
import '../css/ScrolltoTop.css'; // Import styles

function ScrolltoTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = window.scrollY > 50; // Reduced threshold for testing
      setShowButton(isVisible);
      console.log('Scroll Y:', window.scrollY, 'Show Button:', isVisible); // Debug log
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}
    </>
  );
}

export default ScrolltoTopButton;
