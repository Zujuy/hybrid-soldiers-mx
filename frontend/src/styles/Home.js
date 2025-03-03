import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/* Contenedor principal */
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

/* Sección Hero */
export const HomeHero = styled.div`
  position: relative;
  background-image: url('https://res.cloudinary.com/dfxpfatj7/image/upload/v1741026261/Linkin-Park-From-Zero_jb5rsk.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  text-shadow: 2px 2px 4px rgba(203, 203, 203, 0.7);

  /* Pseudo-elemento para la imagen hover */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Cambia la URL de la imagen de hover por la que desees */
    background-image: url('https://res.cloudinary.com/dfxpfatj7/image/upload/v1741026261/linkin-park-band-pic-2024_nuucls.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  /* Al pasar el cursor, se muestra la imagen hover */
  &:hover::after {
    opacity: 1;
  }

  /* Para asegurar que el contenido del hero se muestre por encima del pseudo-elemento */
  > * {
    position: relative;
    z-index: 1;
  }

  /* Para pantallas pequeñas se usa la imagen para mobile/tableta y se desactiva el efecto hover */
  @media (max-width: 768px) {
    background-image: url('https://res.cloudinary.com/dfxpfatj7/image/upload/t_Banner 9:16/v1741026261/Linkin-Park-From-Zero_jb5rsk.jpg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    height: auto;
    min-height: 60vh;

    &::after {
      opacity: 0;
    }
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 100px;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    margin-bottom: -100px;
    ${'' /* padding: 0px 25px 0 0; */}
  }
`;

/* Sección de Contenido */
export const HomeContent = styled.div`
  padding: 20px;
  max-width: 800px;
  text-align: center;
`;

export const HomeDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

/* Módulo del Staff */
export const StaffSection = styled.section`
  width: 100%;
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const StaffGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const StaffMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StaffImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ccc;
`;

export const StaffName = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
`;

/* Banner de Registro */
export const SignupBanner = styled.section`
  width: 100%;
  padding: 40px 20px;
  background: linear-gradient(135deg,rgb(186, 12, 151), #feb47b);
  color: white;
  text-align: center;
  margin: 40px 0;
`;

export const SignupText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const SignupButton = styled.button`
  background-color: white;
  color: #ff7e5f;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

/* Footer */
export const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

export const SocialMedia = styled.div`
  margin-bottom: 10px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
`;
