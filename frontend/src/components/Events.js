import React from 'react';
import '../styles/Events.css'

const Events = () => {
  const upcomingEvents = [
    { id: 1, title: 'Linkin Park Live 2023', date: '2023-12-15', image: 'https://via.placeholder.com/300' },
  ];

  const pastEvents = [
    { id: 2, title: 'Linkin Park Reunion 2022', date: '2022-08-20', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Chester Tribute Night', date: '2021-07-20', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
          </div>
        ))}
      </div>

      <h2>Past Events</h2>
      <div className="event-list">
        {pastEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;