import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { galleriesData } from '../data/galleryData';
import {
  Header,
  GalleryContainer,
  GalleryGrid,
  GalleryImage,
  Modal,
  ModalContent,
  ModalImage,
  CloseButton,
  NavButton,
  BackButtonContainer,
  BackButton
} from '../styles/Galery';

const Gallery = () => {
  const { albumId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const album = galleriesData[albumId];
  
  const prevImage = useCallback(() => {
    setCurrentImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : album.images.length - 1));
  }, [album]);

  const nextImage = useCallback(() => {
    setCurrentImgIndex((prevIndex) => (prevIndex < album.images.length - 1 ? prevIndex + 1 : 0));
  }, [album]);

  const openModal = useCallback((index) => {
    setCurrentImgIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback((e) => {
    if (e.target.id === "modal-overlay") {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!modalOpen) return;
      if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, prevImage, nextImage]);

  if (!album) {
    return <div>Álbum no encontrado</div>;
  }

  return (
    <>
      <Header>
        <h1>{album.title}</h1>
      </Header>
      
      <BackButtonContainer>
        <BackButton to="/events">⬅ Regresar a Eventos</BackButton>
      </BackButtonContainer>

      <GalleryContainer>
        <GalleryGrid>
          {album.images.map((img, index) => (
            <GalleryImage 
              key={index}
              src={img.src}
              alt={img.alt}
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </GalleryGrid>
      </GalleryContainer>

      {modalOpen && (
        <Modal id="modal-overlay" onClick={closeModal} $isOpen={modalOpen}>
          <CloseButton onClick={() => setModalOpen(false)}>✖</CloseButton>
          <NavButton onClick={prevImage} style={{ left: 10 }}>&lt;</NavButton>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={album.images[currentImgIndex].src} alt={album.images[currentImgIndex].alt} />
          </ModalContent>
          <NavButton onClick={nextImage} style={{ right: 10 }}>&gt;</NavButton>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
