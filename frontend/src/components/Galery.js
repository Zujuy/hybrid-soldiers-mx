import React, { useState } from 'react';
import {
    Header,
    GalleryContainer,
    GalleryGrid,
    GalleryImage,
    Modal,
    ModalContent,
    ModalImage
} from '../styles/Galery'

const Galeria = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
  
    // Array de imágenes para la galería (personaliza según evento)
    const images = [
      { src: 'evento1-1.jpg', alt: 'Imagen 1' },
      { src: 'evento1-2.jpg', alt: 'Imagen 2' },
      { src: 'evento1-3.jpg', alt: 'Imagen 3' },
      // Agrega más imágenes según sea necesario
    ];
  
    const openModal = (imgSrc) => {
      setCurrentImg(imgSrc);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setCurrentImg('');
    };
  
    return (
      <>
        <Header>
          <h1>Galería Evento 1</h1>
        </Header>
        <GalleryContainer>
          <GalleryGrid>
            {images.map((img, index) => (
              <GalleryImage 
                key={index} 
                src={img.src} 
                alt={img.alt}
                onClick={() => openModal(img.src)}
              />
            ))}
          </GalleryGrid>
        </GalleryContainer>
        <Modal isOpen={modalOpen} onClick={closeModal}>
          <ModalContent>
            <ModalImage src={currentImg} alt="Vista ampliada" />
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default Galeria;