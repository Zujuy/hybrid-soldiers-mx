// LogoAnimation.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animaation: fade in and move up
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the animation
const AnimationContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// logo image with animation
const LogoImage = styled.img`
  max-width: 300px;
  animation: ${fadeInUp} 1s ease forwards;
  transition: opacity 0.5s ease;
`;

const LogoAnimation = () => {
  // defime the logos to cycle through
  const logos = [
    'https://res.cloudinary.com/dfxpfatj7/image/upload/v1740350801/lp2_hw3xb5.png',
    'https://res.cloudinary.com/dfxpfatj7/image/upload/v1740350801/lp1_n84u05.png',
    'https://res.cloudinary.com/dfxpfatj7/image/upload/v1740350802/lp4_sziktt.png',
    'https://res.cloudinary.com/dfxpfatj7/image/upload/v1740350802/lp5_qpolwv.png',
    'https://res.cloudinary.com/dfxpfatj7/image/upload/v1740455428/lp6_mkhoxx.png',
    'https://res.cloudinary.com/dfxpfatj7/image/upload/v1740350801/lp3_yq1knw.png',

  ];

  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo(prev => (prev + 1) % logos.length);
    }, 1000); // change logo every second
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <AnimationContainer>
      <LogoImage src={logos[currentLogo]} alt="Logo animado" key={currentLogo} />
    </AnimationContainer>
  );
};

export default LogoAnimation;
