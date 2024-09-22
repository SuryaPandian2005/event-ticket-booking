// routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/Book');
const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(200).json({ message: 'Booking successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving booking', error });
    }
});

module.exports = router;
