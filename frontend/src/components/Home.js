import React from 'react';
import { HomeContainer, HomeHero, HomeContent, HomeTitle, HomeDescription } from '../styles/Home';

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero section */}
      <HomeHero>
        <HomeTitle>Bienvenido a Hybrid Soldiers México!</HomeTitle>
      </HomeHero>
      
      {/* Description section */}
      <HomeContent>
        <HomeDescription>
        Únete a nuestra comunidad de fans de Linkin Park. ¡Mantente al día de los últimos eventos, conéctate con otros fans y conviértete en miembro oficial de Hybrid Soldiers México hoy mismo!
        </HomeDescription>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;