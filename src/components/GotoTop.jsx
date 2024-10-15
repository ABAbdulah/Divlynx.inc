import React from 'react';

function GotoTop() {
  const GotoBtn = () => {
    // Scrolls the window to the very top smoothly
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="top-btn">
      <button onClick={GotoBtn}>Go to Top</button>
    </div>
  );
}

export default GotoTop;
