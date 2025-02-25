import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  padding: 20px;
  background: #222;
  color: #fff;
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

const GalleryImage = styled.img`
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;