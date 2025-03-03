import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  text-align: center;
  padding: 20px;
  background: #222;
  color: #fff;
  font-size: 1.5rem;
`;

export const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 10px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 80vh;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 24px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 30px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const BackButton = styled(Link)`
  background: #6a0dad;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #520b8a;
  }
`;

