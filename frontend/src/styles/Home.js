import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HomeHero = styled.div`
  background-image: url('https://res.cloudinary.com/dfxpfatj7/image/upload/t_Banner 16:9/v1739325066/znran4rntdzjvf9dji8b.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

export const HomeContent = styled.div`
  padding: 20px;
  max-width: 800px;
  text-align: center;
`;

export const HomeDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
`;
