// Home.js
import React, { useState } from 'react';
import newsData from '../data/news';
import {
  HomeContainer,
  HomeHero,
  HomeTitle,
  HomeContent,
  HomeDescription,
  StaffSection,
  StaffGrid,
  StaffMember,
  StaffImage,
  StaffName,
  SignupBanner,
  SignupText,
  SignupButton,
  GalleryPreview,
  NewsSection,
  NewsArticle,
  PlaylistContainer,
  ReadMoreButton,
  NewsModal,
  ModalContent,
  CloseButton,
} from '../styles/Home';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

// Datos de ejemplo para el staff
const staffMembers = [
  { name: "Bren", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336055/65230708_2279075055686716_2631961593985892352_n_avf8mu.png" },
  { name: "Rock Shinoda", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336055/463795272_10162209943611660_8263872186281043492_n_qqwvfu.png" },
  { name: "Jalil", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336055/463891801_10222240751962739_6686099833473312699_n_vfgmc2.png" },
  { name: "Lucy", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336056/473140701_10170367371210564_2458075546366321652_n_ixp8r1.png" },
  { name: "Hugo", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336186/465662598_10160777064938335_3503967426650264473_n_pbar0w.png" },
  { name: "Zujuy", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336127/Screenshot_2025-02-11_at_10.55.15_p.m._t8okfp.png" },
];

const galleryPreviews = [
  { title: "Memorial de Chester", image: img1, link: "/gallery/galeria1" },
  { title: "Concierto CDMX 2015", image: img2, link: "/gallery/galeria2" },
  { title: "Evento 3", image: "https://via.placeholder.com/300", link: "/gallery/galeria3" },
  { title: "Evento 4", image: "https://via.placeholder.com/300", link: "/gallery/galeria4" },
];


const Home = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  return (
    <HomeContainer>
      {/* Sección Hero */}
      <HomeHero>
        <HomeTitle>Bienvenido a Hybrid Soldiers México!</HomeTitle>
      </HomeHero>
      
      {/* Sección de Descripción */}
      <HomeContent>
        <HomeDescription>
          Únete a nuestra comunidad de fans de Linkin Park. ¡Mantente al día de los últimos eventos, conéctate con otros fans y conviértete en miembro oficial de Hybrid Soldiers México!
        </HomeDescription>
      </HomeContent>
      
      {/* Noticias */}
      <NewsSection>
        <h2>Últimas Noticias</h2>
        {newsData.map((article, index) => (
        <NewsArticle key={index}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          <ReadMoreButton onClick={() => setSelectedArticle(article)}>Lee más
          </ReadMoreButton>
        </NewsArticle>
        ))}
      </NewsSection>
      
      {/* Modal de Noticias */}
      {selectedArticle && (
        <NewsModal>
          <ModalContent>
            <CloseButton onClick={() => setSelectedArticle(null)}>✖</CloseButton>
            <h2>{selectedArticle.title}</h2>
            <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', borderRadius: '10px' }} />
            <p>{selectedArticle.fullContent}</p>
          </ModalContent>
        </NewsModal>
      )}

      {/* Galerías Destacadas */}
      <GalleryPreview>
        <h2>Galerías Destacadas</h2>
        <div>
          {galleryPreviews.map((gallery, index) => (
            <a key={index} href={gallery.link}>
              <img src={gallery.image} alt={gallery.title} />
              <p>{gallery.title}</p>
            </a>
          ))}
        </div>
      </GalleryPreview>

      {/* Banner de Registro */}
      <SignupBanner>
        <SignupText>
          ¿Aún no eres parte de la comunidad? ¡Regístrate ahora y obtén tu credencial exclusiva!
        </SignupText>
        <SignupButton>Regístrate</SignupButton>
      </SignupBanner>
      
      
      {/* Reproductor de música */}
      <PlaylistContainer>
        <h2>Escucha Linkin Park</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/1dybxRGczBhu7q5AZfyIpa?utm_source=generator&theme=0"
          width="100%"
          height="380"
          style={{ border: "none", borderRadius: "12px" }}
          allowtransparency="true"
          allow="encrypted-media"
          title="Linkin Park Playlist"
        ></iframe>
      </PlaylistContainer>

      {/* Staff */}
      <StaffSection>
        <h2>Conoce a nuestro Staff</h2>
        <StaffGrid>
          {staffMembers.map((member, index) => (
            <StaffMember key={index}>
              <StaffImage src={member.image} alt={member.name} />
              <StaffName>{member.name}</StaffName>
            </StaffMember>
          ))}
        </StaffGrid>
      </StaffSection>
    </HomeContainer>
  );
};

export default Home;
