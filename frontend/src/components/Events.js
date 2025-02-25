import React from 'react';
import {
  Header,
  Grid,
  GridItem,
  Image,
} from '../styles/Events';

const Events = () => {
  const galleries = [
    { src: 'img1.jpg', alt: 'Evento 1', link: '/galeria1' },
    { src: 'img2.jpg', alt: 'Evento 2', link: '/galeria2' },
    { src: 'img3.jpg', alt: 'Evento 3', link: '/galeria3' },
    { src: 'img4.jpg', alt: 'Evento 4', link: '/galeria4' },
    { src: 'img5.jpg', alt: 'Evento 5', link: '/galeria5' },
    { src: 'img6.jpg', alt: 'Evento 6', link: '/galeria6' },
  ];

  return (
    <>
      <Header>
        <h1>Eventos y Conciertos</h1>
      </Header>
      <Grid>
        {galleries.map((item, index) => (
          <GridItem
            to={item.link}
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Image src={item.src} alt={item.alt} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Events;