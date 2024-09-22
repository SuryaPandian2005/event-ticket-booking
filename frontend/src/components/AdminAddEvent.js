import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const AdminAddEvent = () => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventImage, setEventImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/events/add', {
            eventTitle,
            eventDate,
            eventTime,
            ticketPrice,
            eventLocation,
            eventImage,
        })
        .then(() => {
            alert('Event added successfully!');
            setEventTitle('');
            setEventDate('');
            setEventTime('');
            setTicketPrice('');
            setEventLocation('');
            setEventImage('');
        })
        .catch(error => {
            console.error('There was an error adding the event!', error);
        });
    };

    return (
        <form className='aform' onSubmit={handleSubmit}>
            <h2>Add New Event</h2>
            <div>
                <label>Event Title:</label>
                <input type='text' value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required />
            </div>
            <div>
                <label>Event Date:</label>
                <input type='date' value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
            </div>
            <div>
                <label>Event Time:</label>
                <input type='time' value={eventTime} onChange={(e) => setEventTime(e.target.value)} required />
            </div>
            <div>
                <label>Ticket Price:</label>
                <input type='number' value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} required />
            </div>
            <div>
                <label>Event Location:</label>
                <input type='text' value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required />
            </div>
            <div>
                <label>Event Image URL:</label>
                <input type='text' value={eventImage} onChange={(e) => setEventImage(e.target.value)} required />
            </div>
            <button type='submit'>Add Event</button>
        </form>
    );
};

export default AdminAddEvent;
