import React from 'react';
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
  Footer,
  SocialMedia,
} from '../styles/Home';

// Datos de ejemplo para el staff
const staffMembers = [
  { name: "Miembro 1", image: "https://via.placeholder.com/150" },
  { name: "Miembro 2", image: "https://via.placeholder.com/150" },
  { name: "Miembro 3", image: "https://via.placeholder.com/150" },
  { name: "Miembro 4", image: "https://via.placeholder.com/150" },
  { name: "Miembro 5", image: "https://via.placeholder.com/150" },
  { name: "Miembro 6", image: "https://via.placeholder.com/150" },
];

const Home = () => {
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
      
      {/* Módulo del Staff */}
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
      
      {/* Banner de Registro */}
      <SignupBanner>
        <SignupText>
          ¿Aún no eres parte de la comunidad? ¡Regístrate ahora y obtén tu credencial exclusiva!
        </SignupText>
        <SignupButton onClick={() => { /* Aquí puedes redirigir al componente de Sign Up */ }}>
          Regístrate
        </SignupButton>
      </SignupBanner>
      
      {/* Footer */}
      <Footer>
        <SocialMedia>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </SocialMedia>
        <div>
          <small>Hybrid Soldiers México 2025 ©</small>
        </div>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
