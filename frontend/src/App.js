import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Event from './components/Eventlist';
import Book from './components/Booking';
import Register from './components/Register';
import Contact from './components/Contact';
import Log from './components/Login';
import AdminAddEvent from './components/AdminAddEvent';

import logo from './components/DK KD Logo.jpg'; // Ensure correct path to image
import './App.css';

const isAdmin = true;  // Modify this as per your authentication logic

function App() {
  return (
    <Router>
      <div>
        <div className="navibar">
          <img className="logo" src={logo} alt="logo" />
          <Link className="home" to="/">HOME</Link>
          <Link className="event" to="/events">EVENT</Link>
          <Link className="booking" to="/booking">BOOKING</Link>
          <Link className="login" to="/login">LOGIN</Link>
          <Link className="contact" to="/contact">CONTACT</Link>
          {isAdmin && <Link className="admin" to="/admin">ADMIN PAGE</Link>}
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/booking" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Log />} />
            <Route path="/admin" element={isAdmin ? <AdminAddEvent /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
