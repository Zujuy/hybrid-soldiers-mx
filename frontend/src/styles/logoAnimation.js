// LogoAnimation.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animación: fade in con desplazamiento hacia arriba
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

// Contenedor que ocupa toda la pantalla y tiene fondo negro
const AnimationContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilo para la imagen del logo con animación
const LogoImage = styled.img`
  max-width: 300px;
  animation: ${fadeInUp} 1s ease forwards;
  transition: opacity 0.5s ease;
`;

const LogoAnimation = () => {
  // Define las imágenes de los logos (reemplaza las URLs por las que desees)
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
    }, 1000); // Cambia el logo cada 2 segundos
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <AnimationContainer>
      <LogoImage src={logos[currentLogo]} alt="Logo animado" key={currentLogo} />
    </AnimationContainer>
  );
};

export default LogoAnimation;
