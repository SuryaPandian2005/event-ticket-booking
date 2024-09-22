import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.css'; 
import { useNavigate } from 'react-router';

const EventList = () => {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the events!', error);
            });
    }, []);

    const navigate = useNavigate();

    // Pass event details (name, price) to the booking page
    const handleSearch = (event) => {
      navigate('/booking', {
          state: {
              eventName: event.eventTitle,
              eventPrice: event.ticketPrice
          }
      });
    };

    return (
        <div className="eventmain">
            <div className="eventtitle"></div>
            <div className="upcomingeventlist1">
                {events.map(event => (
                    <div key={event._id} className="eventcard1">
                        <img src={event.eventImage} alt={event.eventTitle} className="eventimg1" />
                        <div className="eventtitle1">{event.eventTitle}</div>
                        <div className="eventdate1">Date: {new Date(event.eventDate).toLocaleDateString()}</div>
                        <div className="eventtime1">Time: {event.eventTime}</div>
                        <div className="eventlocation1">Location: {event.eventLocation}</div>
                        <div className="eventprice">Ticket Price: ${event.ticketPrice}</div>
                        <button className="eventbt1" onClick={() => handleSearch(event)} >Buy Ticket</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;
