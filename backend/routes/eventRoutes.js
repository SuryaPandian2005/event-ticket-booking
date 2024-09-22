const express = require('express');
const router = express.Router();
const Event = require('../models/Event'); 


router.post('/add', async (req, res) => {
    try {
        const {
            eventTitle,
            eventDate,
            eventTime,
            ticketPrice,
            eventLocation,
            eventImage
        } = req.body;

        const newEvent = new Event({
            eventTitle,
            eventDate,
            eventTime,
            ticketPrice,
            eventLocation,
            eventImage
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add event' });
    }
});

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

module.exports = router;
