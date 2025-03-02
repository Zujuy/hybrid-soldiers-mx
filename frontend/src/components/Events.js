import React from 'react';
import {
  Header,
  Grid,
  GridItem,
  Image,
  Caption,
} from '../styles/Events';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

const Events = () => {
  const galleries = [
    { src: img1, alt: 'Memorial de Chester', link: '/galeria1' },
    { src: img2, alt: 'Concierto CDMX 2015', link: '/galeria2' },
    { src: '/images/img3.jpg', alt: 'Evento 3', link: '/galeria3' },
    { src: '/images/img4.jpg', alt: 'Evento 4', link: '/galeria4' },
    { src: '/images/img5.jpg', alt: 'Evento 5', link: '/galeria5' },
    { src: '/images/img6.jpg', alt: 'Evento 6', link: '/galeria6' },
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

