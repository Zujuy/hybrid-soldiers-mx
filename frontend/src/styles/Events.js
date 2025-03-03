import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  text-align: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const GridItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  animation: ${fadeIn} 1s ease forwards;
  opacity: 0;

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
  transition: transform 0.5s ease;
`;

// Nuevo componente para el título o caption
export const Caption = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  color: #333;
  text-align: center;
`;
