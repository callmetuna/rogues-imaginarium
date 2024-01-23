import React, { useEffect } from 'react';
import './ImageGlitchStyle.css'; 


const ImageGlitchEffect = () => {
  useEffect(() => {
    const glitchContainer = document.querySelector('.glitch');
    const count = 20;

    for (let i = 0; i < count; i++) {
      let glitchBox = document.createElement('div');
      glitchBox.classList.add('glitch__box');
      glitchContainer.appendChild(glitchBox);
    }

    const glitchInterval = setInterval(() => {
      const glitchBoxes = document.querySelectorAll('.glitch__box');
      glitchBoxes.forEach((glitchBox) => {
        glitchBox.style.left = Math.floor(Math.random() * 100) + 'vw';
        glitchBox.style.top = Math.floor(Math.random() * 100) + 'vh';
        glitchBox.style.width = Math.floor(Math.random() * 400) + 'px';
        glitchBox.style.height = Math.floor(Math.random() * 100) + 'px';
        glitchBox.style.backgroundPosition = Math.floor(Math.random() * 10) + 'px';
      });
    }, 200);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="glitch">
      {/* The background image for the glitch effect */}
      <div className="glitch__background"></div>
    </div>
  );
};

export default ImageGlitchEffect;
