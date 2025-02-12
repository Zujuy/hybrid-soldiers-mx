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
  { name: "Bren", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336055/65230708_2279075055686716_2631961593985892352_n_avf8mu.png" },
  { name: "Rock Shinoda", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336055/463795272_10162209943611660_8263872186281043492_n_qqwvfu.png" },
  { name: "Jalil", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336055/463891801_10222240751962739_6686099833473312699_n_vfgmc2.png" },
  { name: "Lucy", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336056/473140701_10170367371210564_2458075546366321652_n_ixp8r1.png" },
  { name: "Hugo", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336186/465662598_10160777064938335_3503967426650264473_n_pbar0w.png" },
  { name: "Zujuy", image: "https://res.cloudinary.com/dfxpfatj7/image/upload/t_Profile/v1739336127/Screenshot_2025-02-11_at_10.55.15_p.m._t8okfp.png" },
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
