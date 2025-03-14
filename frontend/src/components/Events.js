import React from 'react';
import {
  Header,
  Grid,
  GridItem,
  Image,
  Caption,
} from '../styles/Events';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img-2.jpg';


const Events = () => {
  const galleries = [
    { src: img1, alt: 'Memorial de Chester', link: '/gallery/galeria1' },
    { src: img2, alt: 'Concierto CDMX 2015', link: '/gallery/galeria2' },
    { src: img3, alt: 'Visita a CDMX 2002', link: '/gallery/galeria3' },
    { src: '/images/img4.jpg', alt: 'Evento 4', link: '/galeria/galeria4' },
    { src: '/images/img5.jpg', alt: 'Evento 5', link: '/galeria/galeria5' },
    { src: '/images/img6.jpg', alt: 'Evento 6', link: '/galeria/galeria6' },
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
            <Caption>{item.alt}</Caption>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Events;

