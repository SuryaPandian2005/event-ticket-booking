import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

function Event() {
  const navigate = useNavigate();

  const handleBooking = (eventDetails) => {
    navigate('/booking', { state: eventDetails });
  };

  return (
    <div className='eventmain'>
      <div className="upcomingevent">
        <h1 className='eventtitle'>Upcoming Events</h1>
        <div className="upcomingeventlist1">
          
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" alt="Event " />
            </div>
            <h2 className="eventtitle1">Emerging CEO's</h2>
            <p className="eventdate1">Date: 2025-01-10</p>
            <p className="eventtime1">Time: 10:00 AM</p>
            <p className='eventprice'>Price: $100</p>
            <p className="eventlocation1">Location: New York</p>
            <p className='desp1'>An amazing event for emerging CEOs.</p>
            <button 
              className="eventbt1" 
              onClick={() => handleBooking({
                title: "Emerging CEO's",
                date: '2025-01-10',
                time: '10:00 AM',
                price: '$100',
                location: 'New York'
              })}
            >
              Buy Ticket
            </button>
          </div>

          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" alt="Event" />
            </div>
            <h2 className="eventtitle1">BTS-KPOP</h2>
            <p className="eventdate1">Date: 2024-11-05</p>
            <p className="eventtime1">Time: 03:00 PM</p>
            <p className='eventprice'>Price: $150</p>
            <p className="eventlocation1">Location: Korea</p>
            <p className='desp1'>A spectacular KPOP concert featuring BTS.</p>
            <button 
              className="eventbt1" 
              onClick={() => handleBooking({
                title: "BTS-KPOP",
                date: '2024-11-05',
                time: '03:00 PM',
                price: '$150',
                location: 'Korea'
              })}
            >
              Buy Ticket
            </button>
          </div>

          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" alt="Event " />
            </div>
            <h2 className="eventtitle1">Food Festival</h2>
            <p className="eventdate1">Date: 2024-08-08</p>
            <p className="eventtime1">Time: 11:00 AM</p>
            <p className='eventprice'>Price: $50</p>
            <p className="eventlocation1">Location: New Delhi</p>
            <p className='desp1'>A grand food festival with dishes from all over the world.</p>
            <button 
              className="eventbt1" 
              onClick={() => handleBooking({
                title: "Food Festival",
                date: '2024-08-08',
                time: '11:00 AM',
                price: '$50',
                location: 'New Delhi'
              })}
            >
              Buy Ticket
            </button>
          </div>

          {/* Add more event cards as needed, following the same pattern */}

        </div>
      </div>
    </div>
  );
}

export default Event;
